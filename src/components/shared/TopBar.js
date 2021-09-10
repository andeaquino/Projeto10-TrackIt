import styled from "styled-components";
import {useContext} from 'react';
import UserContext from "../../contexts/UserContext";

export default function TopBar() {
    const {user} = useContext(UserContext);

    return (
        <Header>
            <Logo>TrackIt</Logo>
            <Profile src={user.image} />
        </Header>
    );
}

const Header = styled.header`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
`;

const Logo = styled.h1`
    display: block;
    color: #FFFFFF;
    font-size: 30px;

`;

const Profile = styled.img`
    display: block;
    width: 51px;
    height: 51px;
    border-radius: 25px;

`;