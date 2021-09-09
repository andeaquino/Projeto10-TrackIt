import styled from "styled-components";

export default function CreateHabit() {
    return (
        <CreateBox>
            <Input type="text" placeholder="nome do hábito"/>
            <Days>
                <Day>D</Day>
                <Day>S</Day>
                <Day>T</Day>
                <Day>Q</Day>
                <Day>Q</Day>
                <Day>S</Day>
                <Day>S</Day>
            </Days>
            <Buttons>
                <Cancel>Cancelar</Cancel>
                <Save>Salvar</Save>
            </Buttons>
        </CreateBox>
    );
}

const CreateBox = styled.div`
    width: calc(100% - 30px);
    height: 180px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin: 0 auto 30px;
    padding: 18px;
`;

const Input = styled.input`
    display: block;
    width: 100%;
    height: 45px;
    margin-bottom: 8px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;

    ::placeholder {
        color: #DBDBDB;
        font-size: 20px;
        padding-left: 8px;
    }
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

const Buttons = styled.div`
    text-align: end;
`;

const Cancel = styled.button`
    color: #52B6FF;
    font-size: 16px;
`;

const Save = styled.button`
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 16px;
    margin-left:  25px;
`;