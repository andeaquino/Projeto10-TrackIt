import styled from "styled-components";

export default function Menu() {
    return (
        <Footer>
            <Button>Hábitos</Button>
            <Today>Hoje</Today>
            <Button>Histórico</Button>
        </Footer>
    );
}

const Footer = styled.footer`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Button = styled.button`
    color: #52B6FF;
    font-size: 18px;
    border: none;
    background-color: inherit;
`;

const Today = styled.button`
    width: 91px;
    height: 91px;
    border-radius: 50px;
    background-color: #52B6FF;
    border: none;
    position: absolute;
    bottom: 10px;
    color: #FFFFFF;
    font-size: 18px;

`;