
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
       
        <div>
            <>
           
            <div className=" min-h-[calc(100vh-68px)]">
            <Outlet/>
            </div>
            <h1>Footer</h1>
        </div>
    );
};

export default Root;