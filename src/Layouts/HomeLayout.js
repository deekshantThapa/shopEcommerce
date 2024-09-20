import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";

export default function HomeLayout(){
    return(
        <>
            <Home/>
            <Outlet/>
        </>
    )
}