import styled from "styled-components";
import TopBar from "../shared/TopBar";
import Menu from "../shared/Menu";
import Task from "./Task";
import { useState, useEffect, useContext } from "react";
import { getTodayHabits } from "../../services/trackIt";
import UserContext from "../../contexts/UserContext";
import dayjs from "dayjs";


export default function Today() {
    const [habits, setHabits] = useState([]);
    const [progress, setProgress] = useState(0);
    const {user} = useContext(UserContext);
    const day = dayjs().format('dddd, DD/MM');

    useEffect(() => {
        loadTodayHabits();
    }, []);

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

    const checkProgress = (habitsa) => {
        const habitsDone = habitsa.filter(habit => habit.done === true);
        setProgress(habitsDone.length/habitsa.length * 100);
    }

    return (
        <>
            <TopBar />
            <Container>
                <Header>
                    <Title>{day}</Title>
                    <Description>{progress > 0 ? `${progress.toFixed(0)}% dos hábitos concluídos` : 'Nenhum hábito concluído ainda'}</Description>
                </Header>
                {habits.map(habit => <Task habit={habit} token={user.token} loadTodayHabits={loadTodayHabits}/>)}
            </Container>
            <Menu />
        </>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F2F2F2;
    padding: 70px 0;
`;

const Header = styled.header`
    align-items: center;
    justify-content: space-between;
    padding: 25px 15px;
`;

const Title = styled.h2`
    color: #126BA5;
    font-size: 23px;
`;

const Description = styled.p`
    color: #BABABA;
    font-size: 18px;
    padding-top: 5px;
`;