import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { login } from "../../services/trackIt";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import logo from "../../assets/media/Logo.png";

export default function Login({ setUser }) {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const signIn = () => {
    setLoading(true);
    login({ body: userInfo })
      .then((res) => {
        setUser(res.data);
        setLoading(false);
        history.push("/hoje");
      })
      .catch((error) => {
        setLoading(false);
        alert("Campos inválidos");
      });
  };

  return (
    <LoginContainer loading={loading}>
      <img src={logo} alt="Logo" />
      <input
        type="email"
        placeholder="email"
        value={userInfo.email}
        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="senha"
        value={userInfo.password}
        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
      />
      <button onClick={signIn}>
        {loading ? (
          <Loader type="ThreeDots" color="#FFFFFF" height={13} width={51} />
        ) : (
          "Entrar"
        )}
      </button>
      <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  img {
    display: block;
    width: 180px;
    height: 178px;
    margin: 68px auto 35px;
  }

  input {
    display: block;
    width: 303px;
    height: 45px;
    margin: 0 auto 7px;
    padding-left: 8px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-size: 20px;
    background-color: ${({ loading }) => (loading ? "#F2F2F2" : "inherit")};
    color: ${({ loading }) => (loading ? "#AFAFAF" : "#666666")};
    pointer-events: ${({ loading }) => (loading ? "none" : "initial")};

    ::placeholder {
      color: #dbdbdb;
    }
  }

  button {
    display: block;
    width: 303px;
    height: 45px;
    margin: 0 auto 7px;
    background-color: #52b6ff;
    color: #ffffff;
    font-size: 21px;
    border: none;
    border-radius: 5px;
    opacity: ${({ loading }) => (loading ? 0.7 : 1)};
    pointer-events: ${({ loading }) => (loading ? "none" : "all")};
  }

  a {
    display: block;
    margin-top: 15px;
    text-align: center;
    font-size: 14px;
    color: #52b6ff;
    text-decoration: underline;
  }
`;
