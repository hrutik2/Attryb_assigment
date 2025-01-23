 import axios from "axios";
 import { Login,Signup ,GetProduct,Lodingdata,AddProduct} from "./actiontype";

export const LoginAction=(data)=>(dispatch)=>{
    axios.post(`https://attryb-assigment-1.onrender.com/users/login`,data)
    .then((res)=>{
        console.log(res.data)
        dispatch({type:Login,payload:res.data})
        localStorage.setItem("Authtoken",res.data.token)

    })
    .catch(err=>{
        dispatch({type:Login,payload:err.message})
    })
}
export const SignupAction=(data)=>(dispatch)=>{
    axios.post(`https://attryb-assigment-1.onrender.com/users/register`,data)
    .then((res)=>{
        console.log(res.data)
        dispatch({type:Signup,payload:res.data})
    })
    .catch(err=>{
        dispatch({type:Signup,payload:err.message})
    })
}
export const GetProductAction=()=>(dispatch)=>{
    const token=localStorage.getItem("Authtoken")
    dispatch({type:Lodingdata})
    axios.get(`https://attryb-assigment-1.onrender.com/car`,
        {
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",

            }
            

        }
    )
    .then((res)=>{
        console.log(res.data)
        dispatch({type:GetProduct,payload:res.data})
    })
    .catch(err=>{
        dispatch({type:GetProduct,payload:err.message})
    })
}   

export const AddProductAction=(formData)=>(dispatch)=>{
    let token=localStorage.getItem("Authtoken")
    console.log(token)
     axios.post("https://attryb-assigment-1.onrender.com/car/addcar",formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, 
            "Content-Type": "application/json", 
          },
        }
      )
    .then((res)=>{
        console.log(res.data)
        dispatch({type:AddProduct,payload:res.data})
    })
    .catch(err=>{
        dispatch({type:AddProduct,payload:err.message})
    })
}
