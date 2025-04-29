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

      const onFinish = async (values: any) => {
        try {
          console.log('Edited values:', values);
          await updateProduct({ id: Number(id), data: values }).unwrap();
          message.success('Product updated successfully!');
        } catch (error) {
          message.error('Update failed');
        }
      };
    return (
        <div>
            
        </div>
    );
};

export default EditProduct;