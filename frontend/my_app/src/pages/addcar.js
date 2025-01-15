import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export const CarForm = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    color: "",
    Mileage: "",
    yearOfManufatcher: "",
    model: "",
    transmission: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      title,
      price,
      description,
      image,
      color,
      Mileage,
      yearOfManufatcher,
      model,
      transmission,
    } = formData;

    if (
      !title ||
      !price ||
      !description ||
      !image ||
      !color ||
      !Mileage ||
      !yearOfManufatcher ||
      !model ||
      !transmission
    ) {
      setError("All fields are required");
      return;
    }
    else{
      let token=localStorage.getItem("tokenforcar")
      axios.post("https://attryb-assigment-1.onrender.com/car/addcar",formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, 
            "Content-Type": "application/json", 
          },
        }
      )
      .then(res=>{
        console.log(res)
        alert(res.data.mgs)
        navigate("/")
      })
      .catch(err=>{
        console.log(err)
      })
    }

    
    console.log("Car data submitted:", formData);
    setError("");
    
   
  };
   useEffect(()=>{
    let token=localStorage.getItem("tokenforcar")
    if(!token){
      navigate("/login")
    }
   },[])
  return (
    <CarFormContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Add Car Details</Title>
        <Input
          type="text"
          name="title"
          placeholder="Car Name"
          value={formData.title}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="color"
          placeholder="Color"
          value={formData.color}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="Mileage"
          placeholder="Mileage"
          value={formData.Mileage}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="yearOfManufatcher"
          placeholder="Year of Manufacture"
          value={formData.yearOfManufatcher}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="model"
          placeholder="Model"
          value={formData.model}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="transmission"
          placeholder="Transmission"
          value={formData.transmission}
          onChange={handleChange}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Submit</Button>
      </Form>
    </CarFormContainer>
  );
};

const CarFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
`;

const Form = styled.form`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 500px;
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
    border-color: #feb47b;
    box-shadow: 0 0 5px rgba(254, 180, 123, 0.5);
  }
`;

const Button = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  background: #ff7e5f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #feb47b;
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
