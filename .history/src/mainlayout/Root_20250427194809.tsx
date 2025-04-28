import { Button } from "antd";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
       
        <div>
             <h1>Header</h1>
             <Button type="text">Text Button</Button>
            <div className=" min-h-[calc(100vh-68px)]">
            <Outlet/>
            </div>
            <h1>Footer</h1>
        </div>
    );
};

export default Root;