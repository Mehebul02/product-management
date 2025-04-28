import { createBrowserRouter } from "react-router-dom";
import Root from "../mainlayout/Root";
import Home from "../pages/home/Home";
import Products from "../pages/products/products";
import ProductDetails from "../pages/products/ProductDetails";

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
                element:<Products/>
            },
            {
                path:"/products/:id",
                element:<ProductDetails/>
            }
        ]
        
    }
])


export default router