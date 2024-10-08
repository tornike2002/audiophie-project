"use client";
import Link from "next/link";
import { Button, Form, Input, Select, Space } from "antd";
import { useEffect, useState } from "react";
import React, { useMemo } from "react";

import { notification } from "antd";
import type { NotificationArgsProps } from "antd";
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

type NotificationPlacement = NotificationArgsProps["placement"];
const Context = React.createContext({ name: "Default" });

const CheckoutPage = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
    form.resetFields();
  };

  useEffect(() => {
    const totalPriceNumber = localStorage.getItem("totalPrice");
    if (totalPriceNumber) {
      setTotalPrice(JSON.parse(totalPriceNumber) as number);
    }
  }, []);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description: (
        <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>
      ),
      placement,
    });
    localStorage.removeItem("cartItems");
    localStorage.removeItem("totalPrice");
  };

  const contextValue = useMemo(() => ({ name: "Your Order is Complited" }), []);
  return (
    <section className="px-6 py-5">
      <Link
        href="/"
        className="text-black opacity-50 font-Manrope text-[15px] leading-[25px] my-5"
      >
        Go Back
      </Link>
      <div>
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          style={{ maxWidth: 600, paddingTop: "10px" }}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please fill the name field!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Valid email is required",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[{ required: true, message: "Phone number is required" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: "Address is required" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="zipCode"
            label="Zip Code"
            rules={[{ required: true, message: "Zip code is required" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="city"
            label="City"
            rules={[{ required: true, message: "City is required" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="country"
            label="Country"
            rules={[{ required: true, message: "Country is required" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: "Gender is required" }]}
          >
            <Select placeholder="Select Gender" allowClear>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
      <div className="flex justify-start sm:justify-center max-w-[600px]">
        <div className="flex flex-col gap-2 pb-20 pt-10 w-[300px]">
          <h1 className="text-black font-Manrope text-lg font-bold tracking-[1.286px] uppercase">
            SUMMARY
          </h1>
          <div className="flex items-center justify-between">
            <span className="text-black font-Manrope text-[15px] leading-[25px] opacity-50">
              Payment:
            </span>
            <span className="text-black font-Manrope text-lg font-bold uppercase">
              Cash on Delivery
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-black font-Manrope text-[15px] leading-[25px] opacity-50">
              TOTAL
            </span>
            <span className="text-black font-Manrope text-lg font-bold uppercase">
              ${totalPrice}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-black font-Manrope text-[15px] leading-[25px] opacity-50">
              SHIPPING
            </span>
            <span className="text-black font-Manrope text-lg font-bold uppercase">
              $50
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-black font-Manrope text-[15px] leading-[25px] opacity-50">
              GrandTotal:
            </span>
            <span className="text-customYellow font-Manrope text-lg font-bold uppercase">
              ${totalPrice + 50}
            </span>
          </div>
          <Context.Provider value={contextValue}>
            {contextHolder}
            <Space>
              <Button
                type="primary"
                onClick={() => openNotification("topLeft")}
              >
                Order
              </Button>
            </Space>
          </Context.Provider>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
