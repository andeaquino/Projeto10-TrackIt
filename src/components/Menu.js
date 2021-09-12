import { Link } from "react-router-dom";
import {useContext} from 'react';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import ProgressContext from "../contexts/ProgressContext";
import styled from "styled-components";

export default function Menu() {
    const {progress} = useContext(ProgressContext);
    return (
        <Footer>
            <Link to="/habitos">
                <Button>Hábitos</Button>
            </Link>
            <Link to="/hoje">  
                <Today>
                    <CircularProgressbar value={progress} text={'Hoje'}/>
                </Today>
            </Link>
            <Link to="/historico">
                <Button>Histórico</Button>
            </Link>
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
    left: calc(50% - 45.5px);
    bottom: 10px;
    color: #FFFFFF;
    font-size: 18px;

    .CircularProgressbar-text {
        fill: #FFFFFF;
    }

    .CircularProgressbar-path {
        stroke: #FFFFFF;
    }
    .CircularProgressbar-trail {
        stroke: #52B6FF;
    }
`;