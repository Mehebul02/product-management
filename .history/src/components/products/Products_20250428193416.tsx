import { useGetAllProductQuery } from "../../redux/services/productManagementApi";

const Products = () => {
    const {data:productData, isFetching} = useGetAllProductQuery({limit:9})
    console.log(object);
    return (
        <div>
            
        </div>
    );
};

export default Products;