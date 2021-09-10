import styled from "styled-components";
import logo from "../../media/Logo.png";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Loader from "react-loader-spinner";
import { register } from "../../services/trackIt";

export default function Register() {
    const [user, setUser] = useState({email: "", name: "", image: "", password: ""})
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const signUp = () => {
        setLoading(true);
        register(user)
            .then(ans => {
                setLoading(false);
                history.push('/');
            })
            .catch(error => {
                setLoading(false);
                alert("Campos inválidos");
            });
    }

    return (
        <>
            <Logo src={logo}/>
            <Input loading={loading} type='text' placeholder='email' value={user.email} onChange={e => setUser({...user, email: e.target.value})}/>
            <Input loading={loading} type='text' placeholder='senha' value={user.password} onChange={e => setUser({...user, password: e.target.value})}/>
            <Input loading={loading} type='text' placeholder='nome' value={user.name} onChange={e => setUser({...user, name: e.target.value})}/>
            <Input loading={loading} type='text' placeholder='foto' value={user.image} onChange={e => setUser({...user, image: e.target.value})}/>
            <Button onClick={signUp} loading={loading}>
                {loading ? <Loader type="ThreeDots" color="#FFFFFF" height={13} width={51} /> : "Cadastrar"}
            </Button>
            <Link to="/">
                <SignIn>Já tem uma conta? Faça login!</SignIn>
            </Link>
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
    padding-left: 8px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    background-color: ${({loading}) => loading ? '#F2F2F2' : 'inherit'};
    color: ${({loading}) => loading ? '#AFAFAF' : '#666666'};
    pointer-events: ${({loading}) => loading ? 'none' : 'all'};

    ::placeholder {
        font-size: 20px;
        color: #DBDBDB;
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
    opacity: ${({loading}) => loading ? 0.7 : 1};
    pointer-events: ${({loading}) => loading ? 'none' : 'all'};
`;

const SignIn = styled.a`
    display: block;
    margin-top: 15px;
    text-align: center;
    font-size: 14px;
    color: #52B6FF;
    text-decoration: underline;
`;