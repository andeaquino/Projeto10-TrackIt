import { checkHabit, uncheckHabit } from "../../../services/API";
import styled from "styled-components";

export default function TodayHabit({ habit, token, loadTodayHabits }) {
  const { id, name, currentSequence, highestSequence, done } = habit;

  const toggleHabit = () => {
    if (!done) {
      checkHabit({ id, token }).then(() => {
        loadTodayHabits();
      });
    } else {
      uncheckHabit({ id, token }).then(() => {
        loadTodayHabits();
      });
    }
  };

  return (
    <TodayHabitContainer isdone={done}>
      <Information
        isdone={done}
        current={currentSequence}
        highest={highestSequence}
      >
        <h3>{name}</h3>
        <p>
          Sequência atual:{" "}
          <span className="current-sequence">{currentSequence} dias</span>
        </p>
        <p>
          Seu recorde:{" "}
          <span className="highest-sequence">{highestSequence} dias</span>
        </p>
      </Information>
      <button onClick={toggleHabit}>
        <ion-icon name="checkmark"></ion-icon>
      </button>
    </TodayHabitContainer>
  );
}

const TodayHabitContainer = styled.div`
  width: calc(100% - 30px);
  height: 94px;
  border-radius: 5px;
  background-color: #ffffff;
  margin: 0 auto 10px;
  padding: 14px;
  display: flex;
  justify-content: space-between;

  button {
    width: 69px;
    height: 69px;
    border-radius: 5px;
    background-color: ${({ isdone }) => (isdone ? "#8FC549" : "#EBEBEB")};

    ion-icon {
      color: #ffffff;
      font-size: 60px;
    }
  }
`;

const Information = styled.div`
  color: #666666;

  h3 {
    font-size: 20px;
    padding-bottom: 10px;
    font-weight: 400;
  }

  p {
    font-size: 13px;
    padding-bottom: 3px;
  }

  .current-sequence {
    color: ${({ isdone }) => (isdone ? "#8FC549" : "#666666")};
  }

  .highest-sequence {
    color: ${({ current, highest }) =>
      current === highest && highest > 0 ? "#8FC549" : "#666666"};
  }
`;
