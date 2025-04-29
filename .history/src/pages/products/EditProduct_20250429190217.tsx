import { useParams } from "react-router-dom";

const EditProduct = () => {

    const {id}=useParams()
    const [form] = Form.useForm();
    return (
        <div>
            
        </div>
    );
};

export default EditProduct;