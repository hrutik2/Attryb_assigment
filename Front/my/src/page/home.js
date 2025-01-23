import styled from "styled-components"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetProductAction } from "../redux/action"
import { useNavigate } from "react-router-dom"
export const Home=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {cars}=useSelector(state=>state)
    console.log(cars)
    useEffect(()=>{
        let token=localStorage.getItem("Authtoken")
        if(token){
            dispatch(GetProductAction())
        }
        else{
            navigate("/Auth")
        }
    },[])
    
    return(
        <Container>
            <Sidebar>
            <FilterContainer>
                <FilterSection>
                    <FilterTitle>Price Range</FilterTitle>
                    <FilterInput 
                        type="range" 
                        min="0" 
                        max="2000000" 
                        step="10000"
                    />
                </FilterSection>

                <FilterSection>
                    <FilterTitle>Mileage</FilterTitle>
                    <Select>
                        <option value="">Select Mileage Range</option>
                        <option value="0-10000">0 - 10,000 km</option>
                        <option value="10000-30000">10,000 - 30,000 km</option>
                        <option value="30000-50000">30,000 - 50,000 km</option>
                        <option value="50000+">50,000+ km</option>
                    </Select>
                </FilterSection>

                <FilterSection>
                    <FilterTitle>Color</FilterTitle>
                    <ColorContainer>
                        <ColorOption color="#000000" />
                        <ColorOption color="#FF0000" />
                        <ColorOption color="#FFFFFF" />
                        <ColorOption color="#0000FF" />
                        <ColorOption color="#808080" />
                    </ColorContainer>
                </FilterSection>
            </FilterContainer>
        </Sidebar>
        <SubContainer>
                {cars.map((item)=>(
                  <div key={item._id}>
                            <img src={item.image} alt={item.name} />
                            <h2><i>{item.name}</i></h2>
                            <p><b>Price: </b>{item.price}</p>
                            <p><b>Description: </b>{item.description}</p>
                            
                            <p><b>Color: </b>{item.color}</p>
                            <p><b>Mileage: </b>{item.Mileage}</p>
                            <p><b>Year Of Manufatcher: </b>{item.yearOfManufatcher}</p>
                            <p><b>Model: </b>{item.model}</p>
                            <p><b>Transmission: </b>{item.transmission}</p>
                            
                        </div>
                    )
                )}
                
               
            </SubContainer>


        </Container>
    )
}
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