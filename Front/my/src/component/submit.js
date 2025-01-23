import { useState } from "react"
import styled,{keyframes} from "styled-components"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { SignupAction } from "../redux/action"


export const Submit=()=>{
    const [FormData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    })
    const data=useSelector(store=>store.sigupMessage)
    const dispatch=useDispatch()

    const [error,setError]=useState(false)
    const handleChange=(e)=>{
        const{name,value}=e.target
        setFormData({...FormData,[name]:value})

    }
    const handleSingup=(e)=>{
          e.preventDefault()
          if(FormData.email==="" || FormData.password===""||FormData.name===""){
            setError(true)
              
          }
          else{
            
            setError(false)
            dispatch(SignupAction(FormData))
            alert(data)
        }
        setFormData({
            name:"",
            email:"",
        password:""
          })
    }
    return(
     
            <FormCard>
            <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={FormData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={FormData.email}
                    onChange={handleChange}
                    required
                  />
                   <Input
                    type="text"
                    name="password"
                    placeholder="password"
                    value={FormData.password}
                    onChange={handleChange}
                    required
                  />
                     {error &&<P>Please fill all fields</P>}
                  <Button onClick={handleSingup}>Singup</Button>

            </FormCard>
        
       
    )
}
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
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
