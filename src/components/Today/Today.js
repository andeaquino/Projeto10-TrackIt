import styled from "styled-components";
import TopBar from "../shared/TopBar";
import Menu from "../shared/Menu";
import Task from "./Task";
import { useEffect, useContext } from "react";
import { getTodayHabits } from "../../services/trackIt";
import UserContext from "../../contexts/UserContext";
import dayjs from "dayjs";


export default function Today() {
    const {user} = useContext(UserContext);
    console.log(user.token);
    const day = dayjs().format('dddd, DD/MM');

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        getTodayHabits(config)
            .then(ans => {
                console.log("oi");
            })
    }, []);
    return (
        <>
            <TopBar />
            <Container>
                <Header>
                    <Title>{day}</Title>
                    <Description>Nenhum hábito concluído ainda</Description>
                </Header>
                <Task />
                <Task />
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