import styled from "styled-components";
import { checkHabit, uncheckHabit } from "../../services/trackIt";

export default function Task({habit, token, loadTodayHabits}) {
    const {id, name, currentSequence, highestSequence, done} = habit;

    const check = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        if (!done) {
            checkHabit(id, config)
                .then(() => {
                    loadTodayHabits();
                });
        } else {
            uncheckHabit(id, config)
                .then(() => {
                    loadTodayHabits();
                });
        }
    }

    return (
        <Container>
            <Information>
                <h3>{name}</h3>
                <p>Sequência atual: {currentSequence} dias</p>
                <p>Seu recorde: {highestSequence} dias</p>
            </Information>
            <Checkbox onClick={check} done={done}><ion-icon name="checkmark"></ion-icon></Checkbox>
        </Container>
    );
}

const Container = styled.div`
    width: calc(100% - 30px);
    height: 94px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin: 0 auto 10px;
    padding: 14px;
    display: flex;
    justify-content: space-between;
`;

const Information = styled.div`
    color: #666666;
    h3 {
        font-size: 20px;
        padding-bottom: 10px;
    }
    p {
        font-size: 13px;
        padding-bottom: 3px;
    }
`;

const Checkbox = styled.button`
    width: 69px;
    height: 69px;
    border-radius: 5px;
    background-color: ${({done}) => done ? '#8FC549' : '#EBEBEB'};;

    ion-icon {
        color: #FFFFFF;
        font-size: 60px;
    }
`;