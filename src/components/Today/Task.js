import styled from "styled-components";

export default function Task() {
    return (
        <Container>
            <Information>
                <h3>Ler 1 capítulo de livro</h3>
                <p>Sequência atual: 3 dias</p>
                <p>Seu recorde: 5 dias</p>
            </Information>
            <Checkbox><ion-icon name="checkmark"></ion-icon></Checkbox>
        </Container>
    );
}

const Container = styled.div`
    width: calc(100% - 30px);
    height: 94px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin: 0 auto 10px;
    padding: 14px;
    display: flex;
    justify-content: space-between;
`;

const Information = styled.div`
    color: #666666;
    h3 {
        font-size: 20px;
        padding-bottom: 10px;
    }
    p {
        font-size: 13px;
        padding-bottom: 3px;
    }
`;

const Checkbox = styled.button`
    width: 69px;
    height: 69px;
    border-radius: 5px;
    background-color: #EBEBEB;

    ion-icon {
        color: #FFFFFF;
        font-size: 60px;
    }
`;