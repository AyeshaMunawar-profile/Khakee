import React, {useState} from "react";
import {Form, Typography, Input, Button, Checkbox} from "antd";
import "./sign-up.style.scss";

const {Title} = Typography;

const SignUp: React.FC = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setlastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [rememeberMe, setRememeberMe] = useState(false);
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
					name="basic"
					initialValues={{remember: true}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item
						label="FirstName"
						name="firstname"
						rules={[{required: true, message: "Please enter your first name"}]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="LastName"
						name="lastname"
						rules={[{required: false, message: "Please enter your last name"}]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Username"
						name="username"
						rules={[{required: true, message: "Please input your username!"}]}
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
					<Form.Item
						label="ConfirmPassword"
						name="confirm-password"
						rules={[{required: true, message: "Please retype your password!"}]}
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

export default SignUp;
