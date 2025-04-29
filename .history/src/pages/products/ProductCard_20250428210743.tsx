import { IProduct } from "../../types/products";
import AddToCartButton from "../../components/products/AddToCartButton";
import Sidebar from "../../components/products/Sidebar";



interface ProductCardProps {
    product: IProduct;
}


const ProductCard = ({ product }: ProductCardProps) => {
    console.log("Show card product", product);

    return (

        <div>

           <Link
            
        </div>
    );
};

export default ProductCard;