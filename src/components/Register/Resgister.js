import styled from "styled-components";
import logo from "../../media/Logo.png";

export default function Register() {
    return (
        <>
            <Logo src={logo}/>
            <Input type='text' placeholder='email'/>
            <Input type='text' placeholder='senha'/>
            <Input type='text' placeholder='nome'/>
            <Input type='text' placeholder='foto'/>
            <Button>Cadastrar</Button>
            <Link>Já tem uma conta? Faça login!</Link>
        </>
    );
}

const Logo = styled.img`
    display: block;
    width: 180px;
    height: 178px;
    margin: 68px auto 35px;
`;

const Input = styled.input`
    display: block;
    width: 303px;
    height: 45px;
    margin: 0 auto 7px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    ::placeholder {
        font-size: 20px;
        color: #DBDBDB;
        padding-left: 7px;
    }
`;

const Button = styled.button`
    display: block;
    width: 303px;
    height: 45px;
    margin: 0 auto 7px;
    background-color: #52B6FF;
    color: #FFFFFF;
    font-size: 21px;
    border: none;
    border-radius: 5px;

`;

const Link = styled.a`
    display: block;
    margin-top: 15px;
    text-align: center;
    font-size: 14px;
    color: #52B6FF;
    text-decoration: underline;
`;