import { useState } from "react";
import styled from "styled-components";
import { createHabit } from "../../services/trackIt";

export default function CreateHabit({showCreateBox, cancel, token, loadHabits}) {
    const [habit, setHabit] = useState({name: "", days: []});
    const week = ["D", "S", "T", "Q", "Q", "S", "S"];

    const saveHabit = () => {
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
            })
            .catch(() => {
                alert("Erro");
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
        <CreateBox showCreateBox={showCreateBox}>
            <Input type="text" placeholder="nome do hábito" value={habit.name} onChange={e => setHabit({...habit, name: e.target.value})} />
            <Days>
                {week.map((day, index) => 
                <Day key={index} 
                onClick={() => selectDay(index)} 
                selected={habit.days.includes(index) ? true : false}>
                {day}
                </Day>)}
            </Days>
            <Buttons>
                <Cancel onClick={cancel}>Cancelar</Cancel>
                <Save onClick={saveHabit}>Salvar</Save>
            </Buttons>
        </CreateBox>
    );
}

const CreateBox = styled.div`
    width: calc(100% - 30px);
    height: 180px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin: 0 auto 30px;
    padding: 18px;
    display: ${({showCreateBox}) => showCreateBox ? 'block' : 'none'};
`;

const Input = styled.input`
    display: block;
    width: 100%;
    height: 45px;
    margin-bottom: 8px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    padding-left: 8px;

    ::placeholder {
        color: #DBDBDB;
        font-size: 20px; 
    }
`;

const Days = styled.ul`
    display: flex;
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
`;