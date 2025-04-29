import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, Space, message } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Option } = Select;

const ProductUpdateForm = ({ productId }) => {
  const [form] = Form.useForm();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // প্রোডাক্ট ডেটা লোড
    axios.get(`https://dummyjson.com/products/${productId}`).then(res => {
      const product = res.data;
      form.setFieldsValue(product);
    });

    // ক্যাটাগরি লোড
    axios.get('https://dummyjson.com/products/categories').then(res => {
      setCategories(res.data);
    });
  }, [productId]);

  const onFinish = async (values) => {
    console.log('Final Output:', values);
    try {
      const res = await axios.patch(`https://dummyjson.com/products/${productId}`, values);
      message.success('Product updated successfully!');
      console.log('PATCH response:', res.data);
    } catch (err) {
      console.error(err);
      message.error('Failed to update product');
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{ reviews: [''] }}
    >
      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="description" label="Description">
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item name="price" label="Price" rules={[{ required: true }]}>
        <Input type="number" />
      </Form.Item>

      <Form.Item name="brand" label="Brand">
        <Input />
      </Form.Item>

      <Form.Item name="category" label="Category">
        <Select placeholder="Select a category">
          {categories.map((cat) => (
            <Option key={cat} value={cat}>{cat}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.List name="reviews">
        {(fields, { add, remove }) => (
          <>
            <label>Reviews</label>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} align="baseline" style={{ display: 'flex', marginBottom: 8 }}>
                <Form.Item
                  {...restField}
                  name={name}
                  rules={[{ required: true, message: 'Please input review' }]}
                >
                  <Input placeholder="Review" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Review
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit">Update Product</Button>
      </Form.Item>
    </Form>
  );
};

export default ProductUpdateForm;
