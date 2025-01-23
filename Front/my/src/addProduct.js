import { useState } from "react";
import styled from "styled-components";
import { useDispatch,useSelector } from "react-redux";

import { AddProductAction } from "./redux/action";

export const AddProduct=()=>{
    const dispatch=useDispatch()
    const {msg}=useSelector(state=>state)
    const [formData,setFormData]=useState({
        name:"",
        price:"",
        description:"",
        image:"",
        color:"",
        Mileage:"",
        yearOfManufatcher:"",
        model:"",
        transmission:"",
    })
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(AddProductAction(formData))
        console.log(formData);
        if(msg){
            alert(msg)
        }
    }
    return(
        <Container>
            <Form>
                <FormGroup>
                    <Input type="text" placeholder="name" name="name" value={formData.name} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Input type="number" placeholder="price" name="price" value={formData.price} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Input type="text" placeholder="Description" name="description" value={formData.description} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Input type="text" placeholder="Image URL" name="image" value={formData.image} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Input type="text" placeholder="Color" name="color" value={formData.color} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Input type="number" placeholder="Mileage" name="Mileage" value={formData.Mileage} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Input type="number" placeholder="Year of Manufacture" name="yearOfManufatcher" value={formData.yearOfManufatcher} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Input type="text" placeholder="Model" name="model" value={formData.model} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Input type="text" placeholder="Transmission" name="transmission" value={formData.transmission} onChange={handleChange}  />
                </FormGroup>
                <Button type="submit" onClick={handleSubmit}>Add Product</Button>
            
            </Form>
        </Container>
    )
}

const Container=styled.div`
    padding: 10px;
    width: 60%;
    margin: auto;
  
`
const Form=styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const FormGroup = styled.div`
                margin: 10px 0;
                width: 100%;
                max-width: 400px;
            `

            const Input = styled.input`
                width: 100%;
                padding: 8px 12px;
                border: none;
                border-bottom: 2px solid black;
                outline: none;
                font-size: 14px;
               margin-bottom:10px;
            `

            const Button = styled.button`
                background-color: #0066cc;
                color: white;
                padding: 10px 20px;
                border: none;
                border-radius: 4px;
                font-size: 16px;
                cursor: pointer;
                margin-top: 20px;
                &:hover {
                    background-color: #0052a3;
                }
                &:active {
                    background-color: #004080;
                }
            `