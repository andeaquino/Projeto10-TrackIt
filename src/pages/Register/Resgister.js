import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { register } from "../../services/API";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import logo from "../../assets/media/Logo.png";

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const signUp = () => {
    setLoading(true);
    register({ body: user })
      .then((res) => {
        setLoading(false);
        history.push("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("Campos inválidos");
      });
  };

  return (
    <RegisterContainer loading={loading}>
      <img src={logo} alt="Logo" />
      <input
        type="email"
        placeholder="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="senha"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <input
        type="text"
        placeholder="nome"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="url"
        placeholder="foto"
        value={user.image}
        onChange={(e) => setUser({ ...user, image: e.target.value })}
      />
      <button onClick={signUp}>
        {loading ? (
          <Loader type="ThreeDots" color="#FFFFFF" height={13} width={51} />
        ) : (
          "Cadastrar"
        )}
      </button>
      <Link to="/">Já tem uma conta? Faça login!</Link>
    </RegisterContainer>
  );
}

const RegisterContainer = styled.div`
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
    pointer-events: ${({ loading }) => (loading ? "none" : "all")};

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
