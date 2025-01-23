import { Link } from "react-router-dom";
import styled from "styled-components";

export const DealerNavbar = () => {
    return (
        <Container>
           <StyledLink to="/dealer/inventory">All Products</StyledLink> 
                
                <StyledLink to="/dealer/add-product">Add Product</StyledLink>
           
        </Container>
    );
};

const Container=styled.div`
width:100%;
margin:auto;
display:flex;

align-items:center;
padding-top:20px;
padding-bottom:20px;


`
const StyledLink=styled(Link)`
text-decoration:none;
margin-right:30px;
padding-left:30px;
color:black;
font-size:20px;
&:hover{
    color:wheat;
    transform:scale(1.1);
    transition:transform 0.2s;
    font-weight:bold;
}
&:active{
    color:black;
    transform:scale(1.1);
    transition:transform 0.2s;
    font-weight:bolder;
}
`
