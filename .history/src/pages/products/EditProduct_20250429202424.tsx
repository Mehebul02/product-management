/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import {
    Form,
    Input,
    Button,
    Select,
    Space,
    Typography,
    message,
    InputNumber,
    DatePicker,
  } from 'antd';

  import { useEffect } from 'react';
  import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { useGetCategoryProductQuery, useGetSingleProductQuery, useUpdateProductMutation,  } from "../../redux/services/productManagementApi";
import Container from "../../shared/Container";
import { toast } from "sonner";
const EditProduct = () => {

    const {id}=useParams()
    const [form] = Form.useForm();
    const { data: product, isLoading } = useGetSingleProductQuery(Number(id));
    const { data: categories } = useGetCategoryProductQuery({});
    const [updateProduct] = useUpdateProductMutation();

    useEffect(() => {
        if (product) {
          form.setFieldsValue(product);
        }
      }, [product]);

      const onFinish = async (values: any) => {
        try {
          console.log('Edited values:', values);
      const res=await updateProduct({ id: Number(id), data: values }).unwrap();
      console.log(res);
      
        toast.success("Product updated successfully!")
     
        //   message.success('Product updated successfully!');
        } catch (error:any) {
          message.error('Update failed',);
        }
      };
    return (
        <Container>
            <div>
      <Typography.Title level={3}>Edit Product</Typography.Title>

      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="description" label="Description">
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item name="price" label="Price" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>

        <Form.Item name="brand" label="Brand">
          <Input />
        </Form.Item>

        <Form.Item name="category" label="Category">
          <Select>
          {categories?.map((cat) => (
    <Select.Option key={cat.slug} value={cat.slug}>
      {cat.name}
    </Select.Option>
  ))}
          </Select>
        </Form.Item>

        <Form.List name="reviews">
  {(fields, { add, remove }) => (
    <>
      <label style={{ fontWeight: 'bold', marginBottom: 8, display: 'block' }}>Reviews</label>
      {fields.map(({ key, name, ...restField }) => (
        <Space
          key={key}
          style={{ display: 'flex', marginBottom: 8 }}
          align="baseline"
          wrap
        >
          <Form.Item
            {...restField}
            name={[name, 'reviewerName']}
            rules={[{ required: true, message: 'Reviewer name is required' }]}
          >
            <Input placeholder="Reviewer Name" />
          </Form.Item>

          <Form.Item
            {...restField}
            name={[name, 'reviewerEmail']}
            rules={[{ required: true, message: 'Reviewer email is required' }]}
          >
            <Input placeholder="Reviewer Email" />
          </Form.Item>

          <Form.Item
            {...restField}
            name={[name, 'rating']}
            rules={[{ required: true, message: 'Rating is required' }]}
          >
            <InputNumber placeholder="Rating" min={1} max={5} />
          </Form.Item>

          <Form.Item
            {...restField}
            name={[name, 'comment']}
            rules={[{ required: true, message: 'Comment is required' }]}
          >
            <Input placeholder="Comment" />
          </Form.Item>

          {/* <Form.Item
            {...restField}
            name={[name, 'date']}
            rules={[{ required: true, message: 'Date is required' }]}
          >
            <DatePicker />
          </Form.Item> */}

          <MinusCircleOutlined onClick={() => remove(name)} />
        </Space>
      ))}

      <Form.Item>
        <Button
          type="dashed"
          onClick={() => add()}
          icon={<PlusOutlined />}
        >
          Add Review
        </Button>
      </Form.Item>
    </>
  )}
</Form.List>


        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </div>
        </Container>
    );
};

export default EditProduct;