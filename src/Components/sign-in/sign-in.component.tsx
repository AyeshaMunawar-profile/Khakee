import React, {useState} from "react";
import {Typography, Form, Input, Checkbox, Col, Space, Button, Alert} from "antd";
import swal from "sweetalert";
import {auth, signInWithGoogle} from "../../Firebase/firebase.utils";
import "./sign-in.style.scss";

const {Title} = Typography;

const SignIn: React.FC = () => {
	const [isSignUpFailed, setIsSignUpFailed] = useState(false);
	const [errorMessage, setErrorMessage] = useState<null | string>(null);
	const layout = {
		labelCol: {span: 8},
		wrapperCol: {span: 16}
	};
	const tailLayout = {
		wrapperCol: {offset: 8, span: 16}
	};
	// Trigger after submitting the form and verifying data successfully
	const onFinish = async (values: any) => {
		console.log("Sign In Validation Successful:", values);
		const {email, password} = values;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			setIsSignUpFailed(false);
			setErrorMessage(null);
		} catch (error) {
			console.error("Sign in failed : ", error);
			setIsSignUpFailed(true);
			setErrorMessage(error.message);
		}
	};
	// Trigger after submitting the form and verifying data failed
	const onFinishFailed = (errorInfo: any) => {
		console.log("Sign In Validation Failed:", errorInfo);
	};
	const onClosingAlert = () => {
		setErrorMessage(null);
	};
	const onValuesChanged = (values: any) => {
		console.log(values);
	};
	const handleSignInWithGoogle = () => {
		try {
			signInWithGoogle();
			setErrorMessage(null);
			setIsSignUpFailed(false);
		} catch (error) {
			setErrorMessage(error?.message);
			setIsSignUpFailed(true);
		}
	};
	return (
		<>
			<div className="sign-in-section sub-section">
				<Col>
					<Title>Already have an account</Title>
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
					{isSignUpFailed && errorMessage && (
						<Alert
							message="Oops ! Sign up failed "
							description={errorMessage}
							className="u-margin-top-medium u-margin-bottom-medium"
							type="error"
							closable
							showIcon
							onClose={onClosingAlert}
						/>
					)}
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

					<Form.Item {...tailLayout} className="u-margin-top-medium">
						<Space direction="horizontal" size="middle">
							<Button type="primary" htmlType="submit" className="btn-gradient btn-primary">
								Sign in
							</Button>
							<Button type="primary" className="btn-solid btn-primary--blue" onClick={() => handleSignInWithGoogle()}>
								Sign in with Google
							</Button>
						</Space>
					</Form.Item>
				</Form>
			</div>
		</>
	);
};

export default SignIn;
