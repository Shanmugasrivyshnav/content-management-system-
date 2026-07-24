import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm";

import { login } from "../api/auth";
import {
  setCredentials,
  setLoading,
  setError,
  clearError,
} from "../features/auth/authSlice";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
`;

const Card = styled.div`
  width: 420px;
  background: white;
  padding: 40px;
  border-radius: 8px;
`;

const Title = styled.h2`
  margin-bottom: 25px;
  text-align: center;
`;

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      dispatch(setLoading(true));
      dispatch(clearError());

      const data = await login(email, password);

      console.log("LOGIN RESPONSE:", data);
      dispatch(
        setCredentials({
          token: data.token,
          user: data.admin,
        }),
      );

      navigate("/dashboard");
    } catch (err) {
      dispatch(setError(err.response?.data?.message || "Login failed"));

      alert(err.response?.data?.message || "Login failed");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <Container>
      <Card>
        <Title>CMS Admin Login</Title>

        <LoginForm onSubmit={handleLogin} />
      </Card>
    </Container>
  );
}

export default LoginPage;
