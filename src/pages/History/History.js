import styled from "styled-components";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

export default function History() {
    return(
        <>
            <Header/>
            <HistoryContainer>
                <h2>Histórico</h2>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </HistoryContainer>
            <Menu/>
        </>
    );
}

const HistoryContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F2F2F2;
    padding: 70px 15px;

    h2 {
        color: #126BA5;
        font-size: 23px;
        padding: 25px 0;
        font-weight: 400;
    }

    p {
        color: #666666;
        font-size: 18px;
    }
`;