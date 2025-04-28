
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Root = () => {
    return (
       
        <div>
            <Header/>
           
            <div className=" min-h-[calc(100vh-68px)]">
            <Outlet/>
            </div>
            <h1>Footer</h1>
        </div>
    );
};

export default Root;