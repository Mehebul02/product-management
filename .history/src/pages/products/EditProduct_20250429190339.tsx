import { useParams } from "react-router-dom";
import {
    Form,
    Input,
    Button,
    Select,
    Space,
    Typography,
    message,
  } from 'antd';

  import { useEffect } from 'react';
import { useGetSingleProductQuery } from "../../redux/services/productManagementApi";
const EditProduct = () => {

    const {id}=useParams()
    const [form] = Form.useForm();
    const { data: product, isLoading } = useGetSingleProductQuery(Number(id));
    const { data: categories } = useGetCategoriesQuery();
    const [updateProduct] = useUpdateProductMutation();
    return (
        <div>
            
        </div>
    );
};

export default EditProduct;