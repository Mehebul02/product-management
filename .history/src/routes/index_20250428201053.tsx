import { createBrowserRouter } from "react-router-dom";
import Root from "../mainlayout/Root";
import Home from "../pages/home/Home";

import Pro
const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/products",
                element<Products/>
            }
        ]
        
    }
])


export default router