import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <TopBar>
      <h1>TrackIt</h1>
      <img src={user.image} alt="Profile" />
    </TopBar>
  );
}

const TopBar = styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  h1 {
    display: block;
    color: #ffffff;
    font-size: 39px;
    font-family: "Playball", cursive;
    font-weight: 400;
  }

  img {
    display: block;
    width: 51px;
    height: 51px;
    border-radius: 25px;
  }
`;
