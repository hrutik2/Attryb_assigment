
import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { Login } from "../component/login";
import { Submit } from "../component/submit";
import { useSelector } from "react-redux";

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

// Styled components
const Container = styled.div`
  width: 40%;
  margin: auto;
  padding: 20px;
  text-align: center;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
  
`;

const Button = styled.button`
  width:50%;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: transparent;
  border: none;
  font-size: 16px;

  transition: color 0.3s ease-in-out;

  &:hover {
    color: #007bff;
  }

  
`;


const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const data = useSelector((store) => store.token);

  useEffect(() => {
    console.log(data);
    if (data === "") {
      setIsLogin(false);
    }
  }, [data]);

  return (
    <Container>
      
      <Button onClick={() => setIsLogin(true)}>Login</Button>
      <Button onClick={() => setIsLogin(false)}>Signup</Button>
      
        {isLogin && <Login />}
       {!isLogin && <Submit />}
    </Container>
  );
};

export default AuthPage;
