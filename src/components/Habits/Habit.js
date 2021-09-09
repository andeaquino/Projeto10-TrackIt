import styled from "styled-components";

export default function Habit() {
    return (
        <Container>
            <Header>
                <Title>Ler Capitulo 1</Title>
                <ion-icon name="trash-outline"></ion-icon>
            </Header>
            <Days>
                <Day>D</Day>
                <Day>S</Day>
                <Day>T</Day>
                <Day>Q</Day>
                <Day>Q</Day>
                <Day>S</Day>
                <Day>S</Day>
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
    background-color: #FFFFFF;
    color: #DBDBDB;
    font-size: 20px;
    text-align: center;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin-right: 4px;
    margin-bottom: 30px;

`;