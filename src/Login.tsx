import React from "react";

import ReactDOM from "react-dom";
import "./app.scss";
import { useNavigate } from "react-router-dom";

import Layout from "ShellApp/Layout";
import useStore from "ShellApp/useStore";
import { Account } from "types-shared";
type Props = {};

function Login({}: Props) {
  const { isLogIn, name, login } = useStore();
  const navigate = useNavigate();
  return (
    <Layout>
      Click
      <button
        className="login-btn"
        onClick={() => {
          login("MinhNhat");
          navigate("/order");
        }}
      >
        Login
      </button>
      to view your order
    </Layout>
  );
}

export default Login;
