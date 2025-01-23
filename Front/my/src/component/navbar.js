import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
    return (
        <Container>
            <StyledLink to="/" >Home</StyledLink>
            <StyledLink to="/Auth" >Login</StyledLink>
           
        </Container>
    );
};

const Container=styled.div`
width:100%;
margin:auto;
display:flex;

justify-content:space-between;
align-items:center;
padding-top:20px;
padding-bottom:20px;
background-color:blue;
color:white;

`
const StyledLink=styled(Link)`
text-decoration:none;
margin-right:30px;
padding-left:30px;
color:white;
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
