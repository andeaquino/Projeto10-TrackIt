import { useState } from "react";
import { createHabit } from "../../../services/trackIt";
import Loader from "react-loader-spinner";
import styled from "styled-components";


export default function CreateBox({showCreateBox, cancel, token, loadHabits}) {
    const [habit, setHabit] = useState({name: "", days: []});
    const [loading, setLoading] = useState(false);
    const week = ["D", "S", "T", "Q", "Q", "S", "S"];

    const saveHabit = () => {
        setLoading(true);
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        createHabit(habit, config)
            .then(() => {
                cancel();
                setHabit({name: "", days: []});
                loadHabits();
                setLoading(false);
            })
            .catch(() => {
                alert("Erro");
                setLoading(false);
            })
    }

    const selectDay = (day) => {
        if (habit.days.includes(day)) {
            const filteredDays = habit.days.filter(d => d !== day);
            setHabit({...habit, days: filteredDays})
        } else {
            setHabit({...habit, days: [...habit.days, day]})
        }
    }

    return (
        <CreateBoxContainer showCreateBox={showCreateBox} loading={loading}>
            <input 
                type="text" 
                placeholder="nome do hábito" 
                value={habit.name} 
                onChange={e => setHabit({...habit, name: e.target.value})}
            />
            <ul>
                {week.map((day, index) => 
                    <Day 
                        key={index} 
                        onClick={() => selectDay(index)} 
                        selected={habit.days.includes(index) ? true : false}
                    >
                    {day}
                    </Day>)
                }
            </ul>
            <Buttons>
                <Cancel onClick={cancel}>Cancelar</Cancel>
                <Save onClick={saveHabit} loading={loading}>
                    {loading 
                        ? <Loader type="ThreeDots" color="#FFFFFF" height={13} width={51} /> 
                        : "Salvar"
                    }
                </Save>
            </Buttons>
        </CreateBoxContainer>
    );
}

const CreateBoxContainer = styled.div`
    width: calc(100% - 30px);
    height: 180px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin: 0 auto 30px;
    padding: 18px;
    display: ${({showCreateBox}) => showCreateBox ? 'block' : 'none'};

    input {
        display: block;
        width: 100%;
        height: 45px;
        margin-bottom: 8px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        padding-left: 8px; 
        font-size: 20px;
        background-color: ${({loading}) => loading ? '#F2F2F2' : 'inherit'};
        pointer-events: ${({loading}) => loading ? 'none' : 'all'};
        color: ${({loading}) => loading ? '#AFAFAF' : '#666666'}; 

        ::placeholder {
            color: #DBDBDB;
        }
    }

    ul {
        display: flex;
    }
`;

const Day = styled.li`
    width: 30px;
    height: 30px;
    line-height: 30px;
    background-color: ${({selected}) => selected ? '#DBDBDB' : '#FFFFFF'};;
    color: ${({selected}) => selected ? '#FFFFFF' : '#DBDBDB'};
    font-size: 20px;
    text-align: center;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin-right: 4px;
    margin-bottom: 30px;
`;

const Buttons = styled.div`
    text-align: end;
`;

const Cancel = styled.button`
    color: #52B6FF;
    font-size: 16px;
`;

const Save = styled.button`
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 16px;
    margin-left:  25px;
    opacity: ${({loading}) => loading ? 0.7 : 1};
    pointer-events: ${({loading}) => loading ? 'none' : 'all'};
`;