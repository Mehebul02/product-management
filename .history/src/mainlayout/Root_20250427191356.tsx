import { Outlet } from "react-router-dom";

const Root = () => {
    return (
       
        <div>
             <h1>Header</h1>
            <div className=" min-h-[calc(100vh-68px)]">
            <Outlet/>
            </div>
        </div>
    );
};

export default Root;