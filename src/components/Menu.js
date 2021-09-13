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
                <PageButton>Hábitos</PageButton>
            </Link>
            <Link to="/hoje">  
                <TodayButton>
                    <CircularProgressbar value={progress} text={'Hoje'}/>
                </TodayButton>
            </Link>
            <Link to="/historico">
                <PageButton>Histórico</PageButton>
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

const PageButton = styled.button`
    color: #52B6FF;
    font-size: 18px;
    border: none;
    background-color: inherit;
`;

const TodayButton = styled.button`
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