/* eslint-disable @typescript-eslint/no-unused-vars */
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
  Card,
  Divider,
} from "antd";
import { useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  useGetCategoryProductQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../redux/services/productManagementApi";
import Container from "../../shared/Container";
import { toast } from "sonner";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const EditProduct = () => {
  const { id } = useParams();
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
      console.log("Edited values:", values);
      const res = await updateProduct({ id: Number(id), data: values }).unwrap();
      console.log(res);
      toast.success("Product updated successfully!");
    } catch (error: any) {
      message.error("Update failed");
    }
  };
  if(isLoading){
    return <div className="flex justify-center items-center  h-screen">
        <AiOutlineLoading3Quarters className="animate-spin text-7xl"/>
    </div>
}
  return (
    <Container>
      <Card
        style={{ maxWidth: 900, margin: "auto", padding: "24px" }}
        bordered
      >
        <Typography.Title level={3} style={{ textAlign: "center", marginBottom: 30 }}>
          Edit Product
        </Typography.Title>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          size="large"
          labelCol={{ span: 24 }}
        >
          <Form.Item name="title" label="Product Title" rules={[{ required: true }]}>
            <Input placeholder="Enter product title" />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <Input.TextArea rows={4} placeholder="Enter product description" />
          </Form.Item>

          <Form.Item name="price" label="Price" rules={[{ required: true }]}>
            <InputNumber style={{ width: "100%" }} min={0} prefix="$" />
          </Form.Item>

          <Form.Item name="brand" label="Brand">
            <Input placeholder="Brand name" />
          </Form.Item>

          <Form.Item name="category" label="Category">
            <Select placeholder="Select category">
              {categories?.map((cat: any) => (
                <Select.Option key={cat.slug} value={cat.slug}>
                  {cat.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Divider orientation="left">Customer Reviews</Divider>

          <Form.List name="reviews">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Card key={key} style={{ marginBottom: 16, background: "#fafafa" }}>
                    <Space direction="vertical" size="middle" style={{ width: "100%" }}>
                      <Form.Item
                        {...restField}
                        name={[name, "reviewerName"]}
                        label="Reviewer Name"
                        rules={[{ required: true, message: "Required" }]}
                      >
                        <Input placeholder="Reviewer name" />
                      </Form.Item>

                      <Form.Item
                        {...restField}
                        name={[name, "reviewerEmail"]}
                        label="Reviewer Email"
                        rules={[{ required: true, message: "Required" }]}
                      >
                        <Input placeholder="Email" type="email" />
                      </Form.Item>

                      <Form.Item
                        {...restField}
                        name={[name, "rating"]}
                        label="Rating"
                        rules={[{ required: true, message: "Required" }]}
                      >
                        <InputNumber min={1} max={5} style={{ width: "100%" }} />
                      </Form.Item>

                      <Form.Item
                        {...restField}
                        name={[name, "comment"]}
                        label="Comment"
                        rules={[{ required: true, message: "Required" }]}
                      >
                        <Input placeholder="Customer comment" />
                      </Form.Item>

                      <Button danger onClick={() => remove(name)} block>
                        Remove Review
                      </Button>
                    </Space>
                  </Card>
                ))}

                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    icon={<PlusOutlined />}
                    block
                  >
                    Add Review
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item className="">
            <button className="flex justify-center items-center gap-3  cursor-pointer relative overflow-hidden px-6 py-3 text-[17px] font-medium uppercase transition-all duration-500 border rounded bg-transparent text-[#00A97F] border-[#00A97F] z-10 before:content-[''] before:w-[50px] before:h-[50px] before:bg-[#00A97F] before:rounded-full before:absolute before:top-[-1em] before:left-[-1em] before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] after:content-[''] after:w-[50px] after:h-[50px] after:bg-[#00A97F] after:rounded-full after:absolute after:left-[calc(100%+1em)] after:top-[calc(100%+1em)] after:-translate-x-1/2 after:-translate-y-1/2 after:transition-all after:duration-1000 after:ease-in-out after:z-[-1] hover:text-white hover:before:w-[410px] hover:before:h-[410px] hover:after:w-[410px] hover:after:h-[410px] active:brightness-90fdfd" type="primary" htmlType="submit" block>
              Save Changes
            </button>
          </Form.Item>
        </Form>
      </Card>
    </Container>
  );
};

export default EditProduct;
