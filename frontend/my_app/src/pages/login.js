import React, { useState } from "react";
import styled from "styled-components";



export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

   
    console.log("Login data submitted:", formData);
    setError("");
    alert("Login successful!");
  };

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Log In</Button>
      </Form>
    </LoginContainer>
  );
};
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
`;

const Form = styled.form`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  max-width: 400px;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #2575fc;
    box-shadow: 0 0 5px rgba(37, 117, 252, 0.5);
  }
`;

const Button = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  background: #6a11cb;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #2575fc;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin: -0.5rem 0 0;
`;
