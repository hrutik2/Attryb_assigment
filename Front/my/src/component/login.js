import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { LoginAction } from "../redux/action"
import styled,{keyframes} from "styled-components"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Login=()=>{
    const navigate=useNavigate()
    const [FormData,setFormData]=useState({
        email:"",
        password:""
    })
    const data=useSelector(store=>store.loginMessage)
    const dispatch=useDispatch()
    const [error,setError]=useState(false)
    const handleChange=(e)=>{
        const{name,value}=e.target
        setFormData({...FormData,[name]:value})

    }
    const handleLogin=(e)=>{
          e.preventDefault()
          if(FormData.email==="" || FormData.password===""){
              setError(true)
              
          }
          else{
            dispatch(LoginAction(FormData))
        
            
           
            
            setError(false)
            
        }
        
    }
    useEffect(()=>{
      if(data){
        alert(data)
        if(data==="Login successful"){
           if(FormData.email.includes("admin")){
            navigate("/admin")
           }
           else if(FormData.email.includes("dealer")){
            navigate("/dealer")
           }
           else{
            navigate("/")
           }
        }
        setFormData({
            email:"",
        password:""
          })
      }
        
    },[data])
  
    return(
       
            <FormCard>
                  <Input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={FormData.email}
                    onChange={handleChange}
                    required
                  />
                   <Input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={FormData.password}
                    onChange={handleChange}
                    required

                  />
                  {error &&<P>Please fill all fields</P>}
                  <Button onClick={handleLogin}>Login</Button>

            </FormCard>
        
       
    )
}

const P=styled.p`

text-align:center;
color:red;
font-style:italic;

`
const FormCard = styled.div`
   width:90%;
   margin:auto;
  
`;

const Input=styled.input`
  width:90%;
  padding:10px;
  margin-bottom:40px;
  border:none;
  border-bottom:2px solid black;
  outline:none;
  transition:border-color 0.3s ease;
  &:focus{
    border-color:red;
    border-width:2px;

  }
`
const Button = styled.button`
  width: 50%;
  padding: 12px;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;
