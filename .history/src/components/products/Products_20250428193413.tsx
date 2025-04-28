import { useGetAllProductQuery } from "../../redux/services/productManagementApi";

const Products = () => {
    const {data:productData, isFetching} = useGetAllProductQuery({limit:9})
    clg
    return (
        <div>
            
        </div>
    );
};

export default Products;