import styled from "styled-components";
import { deleteHabit } from "../../services/trackIt";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

export default function Habit({id, name, days, loadHabits}) {
    const week = ["D", "S", "T", "Q", "Q", "S", "S"];
    const {user} = useContext(UserContext);

    const confirmDeleteAction = () => {
        if(window.confirm("Você realmente quer deletar o hábito?")) {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }
            deleteHabit(id, config)
                .then(() => {
                    loadHabits();
                });
        }
    }

    return (
        <Container>
            <Header>
                <Title>{name}</Title>
                <ion-icon name="trash-outline" onClick={confirmDeleteAction}></ion-icon>
            </Header>
            <Days>
                {week.map((day, index) => {
                    let selected;
                    if (days.find(element => element === index + 1)) {
                        selected = true;
                    } else {
                        selected = false;
                    }
                    return (<Day selected={selected}>{day}</Day>);
                } )}
            </Days>
            
        </Container>
    );
}

const Container = styled.div`
    width: calc(100% - 30px);
    height: 91px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin: 0 auto 10px;
    padding: 14px;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;

    ion-icon {
        color: #666666;
        font-size: 17px;
    }
`;

const Title = styled.h3`
    color: #666666;
    font-size: 20px;
    padding: 2px 0 9px;
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