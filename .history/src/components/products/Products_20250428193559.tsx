import { useGetAllProductQuery } from "../../redux/services/productManagementApi";

const Products = () => {
    const {data:productData, isLoading} = useGetAllProductQuery({limit:9})
    if(isLoading){
        
    }
    console.log(productData);
    return (
        <div>
            
        </div>
    );
};

export default Products;