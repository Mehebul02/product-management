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
const EditProduct = () => {

    const {id}=useParams()
    const [form] = Form.useForm();
    return (
        <div>
            
        </div>
    );
};

export default EditProduct;