import { Outlet } from "react-router-dom";

const Root = () => {
    return (
       
        <div>
             <h1>Header</h1>
            <div >
            <Outlet/>
            </div>
        </div>
    );
};

export default Root;