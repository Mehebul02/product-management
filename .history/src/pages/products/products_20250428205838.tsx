import { useState } from "react";
import { useGetAllProductQuery } from "../../redux/services/productManagementApi";
import Container from "../../shared/Container";
import { IProduct } from "../../types/products";
import ProductCard from "./ProductCard";


const Products = () => {
    const [limit, setLimit] = useState(9);
    const {data:productData, isLoading} = useGetAllProductQuery({limit})
    if(isLoading){
        return <p >Loading....</p>
    }
    const handleSeeMore = () => {
        setLimit(prevLimit => prevLimit + 10); 
    };
    return (
        <Container className="mt-10">
            <h1 className="text-4xl font-sans mb-6">Featured Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
    
    {
        productData?.products?.map((product:IProduct,indx:number)=>(<ProductCard key={indx} product={product} />))
    }
</div>
    </Container>
    );
};

export default Products;