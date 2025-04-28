import { useGetAllProductQuery } from "../../redux/services/productManagementApi";

const Products = () => {
    const {data:productData, isLoading} = useGetAllProductQuery({limit:9})
    if(isLoading){
        return <p className="flex justify-center j">Loading....</p>
    }
    console.log(productData);
    return (
        <div>
            
        </div>
    );
};

export default Products;