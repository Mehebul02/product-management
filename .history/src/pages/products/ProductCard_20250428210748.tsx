import { IProduct } from "../../types/products";
import AddToCartButton from "../../components/products/AddToCartButton";
import Sidebar from "../../components/products/Sidebar";
import { Link } from "react-router-dom";



interface ProductCardProps {
    product: IProduct;
}


const ProductCard = ({ product }: ProductCardProps) => {
    console.log("Show card product", product);

    return (

        <div>

           <Link>
           
           </Link>
            
        </div>
    );
};

export default ProductCard;