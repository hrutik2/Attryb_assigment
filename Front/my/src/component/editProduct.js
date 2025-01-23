import styled from "styled-components";
import { useState } from "react";

export const EditProduct = ({
  name,
  price,
  description,
  color,
  Mileage,
  yearOfManufatcher,
  model,
  transmission,
  id,
  image,
  setEdit,
}) => {
  const [formData, setFormData] = useState({
    description,
    price,
    Mileage,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Updated Product Data:", formData); 
    setEdit(false);
  };

  return (
    <Container>
      <Header>
        <p><b>Edit Product</b></p>
        <button onClick={() => setEdit(false)}>X</button>
      </Header>
      <Content>
        <h2>{name}</h2>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Mileage:
          <input
            type="number"
            name="Mileage"
            value={formData.Mileage}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSave}>Save</button>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
  margin: auto;
  

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  
  text-align:center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
  box-shadow:none;
  background-color:transparent;

 

  button {
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
   
    padding: 10px;
    transition: background-color 0.3s;
    font-size: 1rem;

    &:hover {
      background-color: darkred;
    }
  }
`;

const Content = styled.div`
  width: 90%;
  margin: auto;

  label {
    width: 95%;
    text-align:left;
    display: block;


    input {
      width: 100%;
      margin-top: 5px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      display: block;
      margin-bottom: 10px;
    }
  }

  button {
    width: 50%;
    margin: 10px auto 0;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: green;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: darkgreen;
    }
  }
`;
