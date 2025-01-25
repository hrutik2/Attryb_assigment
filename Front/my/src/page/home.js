import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductAction } from "../redux/action";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state);
  const [sortByPrice, setSortByPrice] = useState("asc");
  const [sortByMileage, setSortByMileage] = useState("asc");
  const [color, setColor] = useState("");
  const [data, setData] = useState([]);
  const [Transmission, setTransmission] = useState("");
   




  const clearFilters = () => {
    setData([...cars]);
    setSortByPrice("");
    setSortByMileage("");
    setColor("");
    setTransmission("");
  }
  useEffect(() => {
    if(cars.length>0){
    let filteredData = [...cars];

    
    if (sortByPrice === "asc" && sortByPrice !== "") {
      filteredData.sort((a, b) => { return a.price - b.price});
    } else if (sortByPrice === "desc" && sortByPrice !== "") {
      filteredData.sort((a, b) => { return b.price - a.price});
    }

   
    if (sortByMileage === "asc" && sortByMileage !== "") {
      filteredData.sort((a, b) => a.Mileage - b.Mileage);
    } else if (sortByMileage === "desc" && sortByMileage !== "") {
      filteredData.sort((a, b) => b.Mileage - a.Mileage);
    }

   
    if (color !== "" && color !== "Select Color") {
      filteredData = filteredData.filter((item) => item.color.toLowerCase() === color.toLowerCase());
    }

    if (Transmission !== "" && Transmission !== "Select Transmission") {
      filteredData = filteredData.filter((item) => item.transmission.toLowerCase() === Transmission.toLowerCase());
    }

    setData(filteredData);
  }
  }, [cars, sortByPrice, sortByMileage, color,Transmission]);

  useEffect(() => {
    let token = localStorage.getItem("Authtoken");
    if (token) {
      dispatch(GetProductAction());
    } else {
      navigate("/Auth");
    }
  }, []);
  return (
    <Container>
      <Sidebar>
        <FilterContainer>
          <FilterSection>
            <FilterTitle>Sort By Price</FilterTitle>
            <Select onChange={(e) => setSortByPrice(e.target.value)}>
                <option value="">Select Price</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </Select>
          </FilterSection>

          <FilterSection>
            <FilterTitle>Sort By Mileage</FilterTitle>
            <Select onChange={(e) => setSortByMileage(e.target.value)}>
                <option value="">Select Mileage</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </Select>
          </FilterSection>
        
          <FilterSection>
            <FilterTitle>Select by Transmission</FilterTitle>
            <Select onChange={(e) => setTransmission(e.target.value)}>
              <option value="">Select Transmission</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
              <option value="CVT">CVT</option>
              <option value="DCT">DCT</option>
              <option value="AMT">AMT</option>
              <option value="Other">Other</option>
            </Select>
          </FilterSection>
          <FilterSection>
            <FilterTitle>Color</FilterTitle>
            <ColorContainer>
                <option value="" onClick={() => setColor("")}>Select Color</option>
              <ColorOption onClick={() => setColor("black")} color="black" />
              <ColorOption onClick={() => setColor("silver")} color="silver" />
              <ColorOption onClick={() => setColor("white")} color="white" />
              <ColorOption onClick={() => setColor("blue")} color="blue" />
              <ColorOption onClick={() => setColor("red")} color="red" />
            </ColorContainer>
          </FilterSection>
        </FilterContainer>
        <Button onClick={clearFilters}>Clear Filters</Button>
      </Sidebar>

      <SubContainer>
        {data.map((item) => (
          <div key={item._id}>
            <img src={item.image} alt={item.name} />
            <h2>
              <i>{item.name}</i>
            </h2>
            <p>
              <b>Price: </b>
              {item.price}
            </p>
            <p>
              <b>Description: </b>
              {item.description}
            </p>
            <p>
              <b>Color: </b>
              {item.color}
            </p>
            <p>
              <b>Mileage: </b>
              {item.Mileage}
            </p>
            <p>
              <b>Year Of Manufacturer: </b>
              {item.yearOfManufacturer || "N/A"}
            </p>
            <p>
              <b>Model: </b>
              {item.model}
            </p>
            <p>
              <b>Transmission: </b>
              {item.transmission}
            </p>
          </div>
        ))}
      </SubContainer>
    </Container>
  );
};

const Container=styled.div`
 width:100%;
 display:flex;
 @media (max-width: 768px) {
    flex-direction: column;
 }

`
const Sidebar=styled.div`
 width:20%;
 
 background:beige;
 @media (max-width: 768px) {
    width:80%;
    margin:auto;
    display:flex;
    background-color:transparent;
    flex-direction: column;
 }

`
const FilterContainer = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
`;

const FilterSection = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;

const FilterTitle = styled.h3`
margin: 0;
font-size: 16px;
color: #333;
`;

const FilterInput = styled.input`
width: 100%;
cursor: pointer;
`;

const Select = styled.select`
width: 100%;
padding: 8px;
border-radius: 4px;
border: 1px solid #ddd;
`;

const ColorContainer = styled.div`
display: flex;
gap: 10px;
flex-wrap: wrap;
`;

const ColorOption = styled.div`
width: 25px;
height: 25px;
border-radius: 50%;
background-color: ${props => props.color};
border: 1px solid #ddd;
cursor: pointer;
transition: transform 0.2s;

&:hover {
    transform: scale(1.1);
}
`;
const Button = styled.button`
    width: 50%;
    margin:auto;
    color:white;
    background-color:blue;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ddd;
    cursor: pointer;
`;
const SubContainer = styled.div`
     width:80%;
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
            object-fit: contain;
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