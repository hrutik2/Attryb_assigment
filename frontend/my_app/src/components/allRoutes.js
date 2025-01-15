
import { Route,Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
import { CarForm } from "../pages/addcar";
import { HomePage } from "../pages/home";
export const ALLRoutes=()=>{
    return(
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/sigup" element={<Signup/>}></Route>
        <Route path="/add" element={<CarForm/>}></Route>
    </Routes>
    )
}