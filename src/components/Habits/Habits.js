import TopBar from "../shared/TopBar";
import Menu from "../shared/Menu";
import styled from "styled-components";
import CreateHabit from "./CreateHabit";
import Habit from "./Habit";

export default function Habits() {
    return (
        <>
            <TopBar />
            <Container>
                <Header>
                    <Title>Meus Hábitos</Title>
                    <Button>+</Button>
                </Header>
                <Habit />
                <Habit />
                <Description>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Description>
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 15px;
`;

const Title = styled.h2`
    color: #126BA5;
    font-size: 23px;
`;

const Button = styled.button`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    color: #FFFFFF;
    font-size: 27px;
    border: none;
    border-radius: 5px;
`;

const Description = styled.p`
    color: #666666;
    font-size: 18px;
    padding: 0 15px;
`;