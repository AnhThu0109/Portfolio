"use client";
import emailjs from "emailjs-com";
import { Button, Form, Input, message } from "antd";
import { useRef } from "react";

export default function ContactPage() {
  const formRef = useRef(null);
  const onFinish = (values) => {
    console.log("Success:", values);
    const serviceID = "service_xoe8zwt";
    const templateID = "template_6vtnlit";
    const userID = "AqchfsbbfvCTTRTtn";

    const templateParams = {
      to_name: "Anh Thu",
      from_name: values.name,
      email: values.email,
      message: values.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("Email successfully sent!", response.status, response.text);
        message.success("Your message has been sent successfully!");
        if (formRef.current) {
          formRef.current.resetFields();
        }
      })
      .catch((error) => {
        console.error("Failed to send email. Error:", error);
        message.error("Failed to send your message. Please try again.");
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex flex-col items-center text-white">
      <h1 className="m-10 text-5xl text-center">Contact me</h1>
      <Form
        ref={formRef}
        className="bg-sky-400/[.3] border border-blue-300 rounded-xl w-full border-dashed p-10"
        name="basic"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label={
            <span style={{ color: "white", fontWeight: "bold" }}>Name</span>
          }
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
            {
              whitespace: true,
              message: "The field cannot be empty or just whitespace!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={
            <span style={{ color: "white", fontWeight: "bold" }}>Email</span>
          }
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "email",
              message: "Please enter a valid email address!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={
            <span style={{ color: "white", fontWeight: "bold" }}>Message</span>
          }
          name="message"
          rules={[
            {
              required: true,
              message: "Please input your message!",
            },
            {
              whitespace: true,
              message: "The field cannot be empty or just whitespace!",
            },
            {
              min: 10,
              message:
                "Please enter a message containing at least 10 characters.",
            },
          ]}
        >
          <Input.TextArea rows={6} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 16,
          }}
        >
          <Button htmlType="submit" className="font-bold">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
