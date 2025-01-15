import styled from "styled-components"
import { Link } from "react-router-dom";
 
 export const Navbar=()=>{
    return(
        <NavbarContainer>
           <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/sigup">Signup</StyledLink>
        </NavbarContainer>
    )
 }

 const NavbarContainer=styled.div`
  width:98%;
  background-color:blue;

  padding:20px ;
  display:flex;
  justify-content:space-around;

 `
 const StyledLink=styled(Link)`
  text-decoration:none;
  color:white;
 `