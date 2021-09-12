import { useState, useEffect, useContext } from "react";
import { getTodayHabits } from "../../services/trackIt";
import UserContext from "../../contexts/UserContext";
import ProgressContext from "../../contexts/ProgressContext";
import dayjs from "dayjs";
import styled from "styled-components";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import TodayHabit from "./components/TodayHabit";

export default function Today() {
    const [habits, setHabits] = useState([]);
    const {progress, setProgress} = useContext(ProgressContext);
    const {user} = useContext(UserContext);
    const day = dayjs().format('dddd, DD/MM');

    const checkProgress = (totalHabits) => {
        const habitsDone = totalHabits.filter(habit => habit.done === true);
        setProgress(habitsDone.length / totalHabits.length * 100);
    }

    const loadTodayHabits = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        getTodayHabits(config)
            .then(res => {
                setHabits(res.data);
                checkProgress(res.data);
            });
    }

    useEffect(() => {
        loadTodayHabits();
    }, []);

    return (
        <>
            <Header />
            <TodayContainer progress={progress}>
                <h2>{day}</h2>
                <span className="habits-progress">
                    {progress > 0 
                        ? `${progress.toFixed(0)}% dos hábitos concluídos` 
                        : 'Nenhum hábito concluído ainda'
                    }
                </span>
                {habits.map(habit => <TodayHabit habit={habit} token={user.token} loadTodayHabits={loadTodayHabits}/>)}
            </TodayContainer>
            <Menu />
        </>
    );
}

const TodayContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #F2F2F2;
    padding: 70px 0 100px;

    h2 {
        color: #126BA5;
        font-size: 23px;
        font-weight: 400;
        padding: 25px 15px 0;
    }

    .habits-progress {
        display: block;
        color: ${({progress}) => progress > 0 ? '#8FC549' : '#BABABA'};
        font-size: 18px;
        padding: 5px 15px 30px;  
    }
`;