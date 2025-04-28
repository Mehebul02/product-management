import { useGetAllProductQuery } from "../../redux/services/productManagementApi";
import Container from "../../shared/Container";
import { IProduct } from "../../types/products";
import ProductCard from "./ProductCard";

const Products = () => {
    const {data:productData, isLoading} = useGetAllProductQuery({limit:9})
    if(isLoading){
        return <p >Loading....</p>
    }
    console.log(productData);
    return (
        <Container className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
    
    {
        productData?.produ?.map((product:IProduct,indx:number)=>(<ProductCard key={indx} product={product}/>))
    }
</div>
    </Container>
    );
};

export default Products;