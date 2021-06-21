import React, {useState} from "react";
import {Typography, Form, Input, Button, Checkbox, Col} from "antd";
import "./sign-in.style.scss";
import {ConsoleSqlOutlined} from "@ant-design/icons";

const {Title} = Typography;

const SignIn: React.FC = () => {
	const layout = {
		labelCol: {span: 8},
		wrapperCol: {span: 16}
	};
	const tailLayout = {
		wrapperCol: {offset: 8, span: 16}
	};
	// Trigger after submitting the form and verifying data successfully
	const onFinish = (values: any) => {
		console.log("Success:", values);
	};
	// Trigger after submitting the form and verifying data failed
	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	const onValuesChanged = (values: any) => {
		console.log(values);
	};
	return (
		<>
			<div className="sign-in-section sub-section">
				<Col>
					<Title>I already have and account</Title>
					<Title level={3} className="font-weight-normal">
						Sign in using your email and password
					</Title>
				</Col>
				<Form
					className="sign-in-form u-margin-top-big"
					{...layout}
					name="signin-form"
					initialValues={{remember: true}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					onValuesChange={onValuesChanged}
				>
					<Form.Item
						label="Email Address"
						name="email"
						rules={[
							{required: true, message: "Please input your email address !"},
							{
								type: "email",
								message: "Please enter a valid email address!"
							}
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[{required: true, message: "Please input your password!"}]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item {...tailLayout} name="remember" valuePropName="checked">
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<Form.Item {...tailLayout}>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</>
	);
};

export default SignIn;
