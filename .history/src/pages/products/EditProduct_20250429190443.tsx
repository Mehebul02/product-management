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
import { useGetCategoryProductQuery, useGetSingleProductQuery, useUpdateProductQuery } from "../../redux/services/productManagementApi";
const EditProduct = () => {

    const {id}=useParams()
    const [form] = Form.useForm();
    const { data: product, isLoading } = useGetSingleProductQuery(Number(id));
    const { data: categories } = useGetCategoryProductQuery();
    const [updateProduct] = useUpdateProductQuery();

    useEffect(() => {
        if (product) {
          form.setFieldsValue(product);
        }
      }, [product]);
    return (
        <div>
            
        </div>
    );
};

export default EditProduct;