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
  import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { useGetCategoryProductQuery, useGetSingleProductQuery,  } from "../../redux/services/productManagementApi";
import Container from "../../shared/Container";
const EditProduct = () => {

    const {id}=useParams()
    const [form] = Form.useForm();
    const { data: product, isLoading } = useGetSingleProductQuery(Number(id));
    const { data: categories } = useGetCategoryProductQuery({});
    // const [updateProduct] = useUpdateProductQuery();

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
              <Select.Option key={cat} value={cat}>
                {cat.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.List name="reviews">
          {(fields, { add, remove }) => (
            <>
              <label>Reviews</label>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: 'flex', marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={name}
                    rules={[{ required: true, message: 'Input review' }]}
                  >
                    <Input placeholder="Review" />
                  </Form.Item>
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