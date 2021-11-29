import { useContext } from "react";
import { deleteHabit } from "../../../services/trackIt";
import UserContext from "../../../contexts/UserContext";
import styled from "styled-components";

export default function Habit({ habit, loadHabits }) {
  const { id, name, days } = habit;
  const { user } = useContext(UserContext);
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];

  const confirmDeleteAction = () => {
    if (window.confirm("Você realmente quer deletar o hábito?")) {
      deleteHabit({ id, token: user.token }).then(() => {
        loadHabits();
      });
    }
  };

  return (
    <HabitContainer>
      <HabitHeader>
        <h3>{name}</h3>
        <ion-icon name="trash-outline" onClick={confirmDeleteAction}></ion-icon>
      </HabitHeader>
      <ul>
        {week.map((day, index) => (
          <Day key={index} selected={days.includes(index)}>
            {day}
          </Day>
        ))}
      </ul>
    </HabitContainer>
  );
}

const HabitContainer = styled.div`
  width: calc(100% - 30px);
  height: 91px;
  border-radius: 5px;
  background-color: #ffffff;
  margin: 0 auto 10px;
  padding: 14px;

  ul {
    display: flex;
  }
`;

const HabitHeader = styled.header`
  display: flex;
  justify-content: space-between;

  h3 {
    color: #666666;
    font-size: 20px;
    padding: 2px 0 9px;
    font-weight: 400;
  }

  ion-icon {
    color: #666666;
    font-size: 17px;
  }
`;

const Day = styled.li`
  width: 30px;
  height: 30px;
  line-height: 30px;
  background-color: ${({ selected }) => (selected ? "#DBDBDB" : "#FFFFFF")};
  color: ${({ selected }) => (selected ? "#FFFFFF" : "#DBDBDB")};
  font-size: 20px;
  text-align: center;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  margin-right: 4px;
  margin-bottom: 30px;
`;
