import React from "react";
import {Form, Typography, Input, Button, Checkbox} from "antd";
import "./sign-up.style.scss";

const {Title} = Typography;

const SignUp: React.FC = () => {
	const layout = {
		labelCol: {span: 8},
		wrapperCol: {span: 16}
	};
	const tailLayout = {
		wrapperCol: {offset: 8, span: 16}
	};

	const onFinish = (values: any) => {
		console.log("Success:", values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};
	const onValuesChanged = (values: any) => {
		console.log(values);
	};

	return (
		<>
			<div className="sign-up-section sub-section">
				<Title>Don&apos;t have and account ?</Title>
				<Title level={3} className="font-weight-normal">
					Create new account using your email and password
				</Title>
				<Form
					className="sign-up-form u-margin-top-big"
					{...layout}
					name="signup-form"
					initialValues={{remember: true}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					onValuesChange={onValuesChanged}
				>
					<Form.Item
						label="First Name"
						name="firstName"
						rules={[{required: true, message: "Please enter your first name"}]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Last Name"
						name="lastName"
						rules={[{required: false, message: "Please enter your last name"}]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Username"
						name="userName"
						rules={[{required: true, message: "Please input your username!"}]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Email Address"
						name="email"
						rules={[
							{required: true, message: "Please input your email address"},
							{
								type: "email",
								message: "Please enter a valid email address!"
							}
						]}
					>
						<Input />
					</Form.Item>
					;
					<Form.Item
						label="Password"
						name="password"
						rules={[{required: true, message: "Please input your password!"}]}
					>
						<Input.Password />
					</Form.Item>
					<Form.Item
						label="Confirm Password"
						name="confirmPassword"
						dependencies={["password"]}
						hasFeedback
						rules={[
							{
								required: true,
								message: "Please confirm your password!"
							},
							({getFieldValue}) => ({
								validator(_, value) {
									if (!value || getFieldValue("password") === value) {
										return Promise.resolve();
									}
									return Promise.reject(new Error("The two passwords that you entered do not match!"));
								}
							})
						]}
					>
						<Input.Password />
					</Form.Item>
					<Form.Item {...tailLayout} name="remember" valuePropName="checked">
						<Checkbox>Remember me</Checkbox>
					</Form.Item>
					<Form.Item {...tailLayout} className="u-margin-top-medium">
						<Button type="primary" htmlType="submit" className="btn-solid btn-primary--blue">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</>
	);
};

export default SignUp;
