import { data } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"  
import styled from "styled-components"
import { EditProduct } from "./editProduct"
const carData = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfN57k2X3l0aUKY49kxXG674b5iTD1SlNjXrKUIr2TVEECGXAwQq1wtlFDY9UdmBXbKQ8&usqp=CAU",
      name: "Tesla Model S",
      price: 80000,
      description: "Electric sedan with autopilot features.",
      color: "Red",
      Mileage: 150,
      yearOfManufatcher: 2022,
      model: "Model S",
      transmission: "Automatic",
    },
    {
      id: 2,
      image: "https://media.istockphoto.com/id/1209372574/photo/2020-ford-mustang-gt.jpg?s=612x612&w=0&k=20&c=bNkMfMPaHEA3WiFwTxfszI2LxNiLkdCmdIaqw9uwJ5M=",
      name: "Ford Mustang",
        price: 60000,
      description: "Iconic American muscle car.",
      color: "Blue",
      Mileage: 200,
      yearOfManufatcher: 2021,
      model: "Mustang GT",
      transmission: "Manual",
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2PSdjdu_2pBMAXVgt7lyqfXdfiBNPm4s64w&s",
      name: "Toyota Corolla",
      price: 25000,
      description: "Reliable compact sedan with great mileage.",
      color: "White",
      Mileage: 300,
      yearOfManufatcher: 2020,
      model: "Corolla XLE",
      transmission: "Automatic",
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSHz0hXYeVTN4tGYhK6ZDqjtfMSVggiNd6rw&s",
      name: "BMW X5",
      price: 70000,
      description: "Luxury SUV with advanced features.",
      color: "Black",
      Mileage: 250,
      yearOfManufatcher: 2023,
      model: "X5",
      transmission: "Automatic",
    },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7wE6h7VZ-ln_gZPl6DVSsS_TW98sPAK2Qg&s",
      name: "Honda Civic",
      price: 28000,
      description: "Popular sedan with sporty design.",
      color: "Silver",
      Mileage: 350,
      yearOfManufatcher: 2019,
      model: "Civic EX",
      transmission: "CVT",
    },
  ];    
  
export const DealerProduct=()=>{
    const navigate=useNavigate();
    const [data,setData]=useState(carData);
    const [edit,setEdit]=useState(false);
    const [editData,setEditData]=useState(null);
    return(
        

        <Container>
            <h1>DealerProduct</h1>
            <SubContainer>
                {data.map((item)=>(
                  <div key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <h2>{item.name}</h2>
                            <p>{item.price}</p>
                            <p>{item.description}</p>
                            
                            <p>{item.color}</p>
                            <p>{item.Mileage}</p>
                            <p>{item.yearOfManufatcher}</p>
                            <p>{item.model}</p>
                            <p>{item.transmission}</p>
                            <button onClick={()=>{
                                setEditData(item);
                                setEdit(true);
                            }}>Edit</button>
                            {edit && <EditProduct {...editData} setEdit={setEdit}/>}

                            
                            <button>Delete</button>
                        </div>
                    )
                )}
                
               
            </SubContainer>
            
        </Container>
    )
}
const Container = styled.div`
    padding: 10px;
    width: 90%;
    margin: auto;
`;

const SubContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
    text-align:center;
    div {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 15px;
        background: white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);

        img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 4px;
        }

        h2 {
            margin: 10px 0;
            color: #333;
        }

        p {
            margin: 5px 0;
            color: #666;
        }

        button {
            margin: 5px;
            padding: 8px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            
            &:first-of-type {
                background: #4CAF50;
                color: white;
            }

            &:last-of-type {
                background: #f44336;
                color: white;
            }

            &:hover {
                opacity: 0.9;
            }
        }
    }
`;
