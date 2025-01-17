
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';




const mockCarsData = [
  {
    name: 'Car A',
    price: 20000,
    description: 'A reliable car.',
    image: 'https://via.placeholder.com/250',
    color: 'Red',
    Mileage: 15000,
    yearOfManufatcher: 2020,
    model: 'Model A',
    transmission: 'Automatic',
  },
  {
    name: 'Car B',
    price: 15000,
    description: 'An economical car.',
    image: 'https://via.placeholder.com/250',
    color: 'Blue',
    Mileage: 20000,
    yearOfManufatcher: 2018,
    model: 'Model B',
    transmission: 'Manual',
  },

];

export const HomePage = () => {
  const [cars, setCars] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [order, setOrder] = useState('asc');
  const [filterColor, setFilterColor] = useState('');
  const Nav=useNavigate()
  const getdata = () => {
    let token = localStorage.getItem("tokenforcar");
    console.log("Token being used:", token);
  
    axios
      .get("https://attryb-assigment-1.onrender.com/car", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Server Response:", res.data);
        setCars(res.data); 
      })
      .catch((err) => {
        if (err.response) {
          console.error("Error Response:", err.response.data);
        } else if (err.request) {
          console.error("No Response:", err.request);
        } else {
          console.error("Request Setup Error:", err.message);
        }
      });
  };
  
  useEffect(() => { 
let token = localStorage.getItem("tokenforcar");
  if(token){
    getdata()
 }
    setCars(mockCarsData);
  }, []);
  
  const handleSort = () => {
    const sortedCars = [...cars].sort((a, b) => {
      if (sortBy === 'price' || sortBy === 'Mileage') {
        return order === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
      }
      return 0;
    });
    setCars(sortedCars);
  };
  const handleDelete=(id)=>{
       let token = localStorage.getItem("tokenforcar"); axios.delete(`https://attryb-assigment-1.onrender.com/car/deleteCar/${id}`,
{
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
)
    .then((res) => {
      console.log("Server Response:", res.data)
      alert(res.data.msg)
    })
  }

  const handleFilter = () => {
    const filteredCars = mockCarsData.filter(
      (car) => !filterColor || car.color.toLowerCase() === filterColor.toLowerCase()
    );
    setCars(filteredCars);
  };
  const handleAdd=(e)=>{
    e.preventDefault()
    Nav('/add')
  }

  useEffect(() => {
    handleSort();
  }, [sortBy, order]);

  useEffect(() => {
    handleFilter();
  }, [filterColor]);

  return (
    <Container>
      <Filters>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="Mileage">Mileage</option>
        </select>

        <select onChange={(e) => setOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <input
          type="text"
          placeholder="Filter by Color"
          value={filterColor}
          onChange={(e) => setFilterColor(e.target.value)}
        />
        <Button_1 onClick={handleAdd}>Add car</Button_1>
      </Filters>

      <CarsGrid>
        {cars.map((car, index) => (
          <CarCard key={index}>
            <img src={car.image} alt={car.name} />
            <div className="details">
              <h3>{car.name}</h3>
              <p className="price">${car.price}</p>
              
              <button onClick={()=>handleDelete(car._id)}>Delete</button>
              <button>Show detail</button>
            </div>
          </CarCard>
        ))}
      </CarsGrid>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;

  select, input {
    padding: 10px;
    margin: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const CarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const CarCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .details {
    padding: 15px;

    h3 {
      margin: 0 0 10px;
      font-size: 18px;
    }

    p {
      margin: 5px 0;
      color: #666;
    }

    .price {
      font-weight: bold;
      color: #000;
    }
  }
`;
const Button_1=styled.button`
 background-color:blue;
 color: white;
 border: none;
 border-radius: 15px;
 padding: 10px;

`

