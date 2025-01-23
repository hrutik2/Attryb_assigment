import { Login, Signup,GetProduct,Lodingdata,AddProduct } from "./actiontype";

const initialState={
    login:false,
    Signup:false,
    cars:[],
    loading:false,
    msg:"",
    token:"",
    loginMessage:"",
    sigupMessage:"",
}
export const Reducer=(state=initialState,action)=>{
    switch (action.type) {
        case Login:
             return{ ...state,Login:true,Signup:false,token:action.payload.token,loginMessage:action.payload.msg}
        case Signup:
            return{...state,Login:false,Signup:true,sigupMessage:action.payload.msg}
        case GetProduct:
            return{...state,cars:action.payload,loading:false}
        case Lodingdata:
            return{...state,loading:true}
        case AddProduct:
            return{...state,msg:action.payload.mgs}
            
    
        default:
            return state;
    }
}