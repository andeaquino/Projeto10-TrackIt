import styled from "styled-components";
import Menu from "../shared/Menu";
import TopBar from "../shared/TopBar";

export default function History() {
    return(
        <>
            <TopBar/>
            <Container>
                <Title>Histórico</Title>
                <Description>Em breve você poderá ver o histórico dos seus hábitos aqui!</Description>
            </Container>
            <Menu/>
        </>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F2F2F2;
    padding: 70px 15px;
`;

const Description = styled.p`
    color: #666666;
    font-size: 18px;
`;

const Title = styled.h2`
    color: #126BA5;
    font-size: 23px;
    padding: 25px 0;
`;