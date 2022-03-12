import React, {useState} from "react";
import {Form, Typography, Input, Button, Checkbox, Space, Alert} from "antd";
import {PasswordInput} from "antd-password-input-strength";
import swal from "sweetalert";
import {auth, createUserProfileDocument} from "../../Firebase/firebase.utils";
import "./sign-up.style.scss";

const {Title} = Typography;
const passwordStrengthIndicatorSettings = {
	colorScheme: {levels: ["#e55371", "#fc984f", "#f5ce0b", "#cbe11d", "#41d46b"], noLevel: "lightgrey"},
	height: 10,
	alwaysVisible: false
};
const SignUp: React.FC = () => {
	const [isSignUpFailed, setIsSignUpFailed] = useState(false);
	const [errorMessage, setErrorMessage] = useState<null | string>(null);
	const layout = {
		labelCol: {span: 8},
		wrapperCol: {span: 16}
	};
	const tailLayout = {
		wrapperCol: {offset: 8, span: 16}
	};

	const onFinish = async (values: any) => {
		const {email, password, displayName} = values;
		console.log("Sign up from validation success:", values);
		try {
			const {user} = await auth.createUserWithEmailAndPassword(email, password);
			const photoURL = user?.photoURL ? user.photoURL : null;
			await createUserProfileDocument(user, {displayName, photoURL});
			setIsSignUpFailed(false);
			setErrorMessage(null);
			swal("Welcome!", "Your account has been created successfully", "success");
			console.log("Response from the signup call is :", user);
		} catch (error: any) {
			setIsSignUpFailed(true);
			setErrorMessage(error.message);
			console.error("Sign Up Failed : ", error);
		}
		// const {user} = await auth.createUserWithEmailAndPassword();
	};

	const onClosingAlert = () => {
		setErrorMessage(null);
	};
	const onFinishFailed = (errorInfo: any) => {
		console.log("Sign up form validation failed:", errorInfo);
	};

	const onValuesChanged = (values: any) => {
		// console.log(values);
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
						label="Display Name"
						name="displayName"
						rules={[
							{required: true, message: "Please enter a valid display name"},
							{min: 7, message: "Display name must be minimum 7 characters."},
							{max: 15, message: "Display name must be maximum 15 characters."}
						]}
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
					<Form.Item
						label="Password"
						name="password"
						rules={[
							{required: true, message: "Please input your password!"},
							{min: 7, message: "Password must be minimum 7 characters."}
						]}
					>
						<PasswordInput settings={passwordStrengthIndicatorSettings} />
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
						<PasswordInput settings={passwordStrengthIndicatorSettings} />
					</Form.Item>
					<Form.Item {...tailLayout} name="remember" valuePropName="checked">
						<Checkbox>Remember me</Checkbox>
					</Form.Item>
					<Form.Item {...tailLayout} className="u-margin-top-medium">
						<Button type="primary" htmlType="submit" className="btn-solid btn-primary">
							Sign up
						</Button>
					</Form.Item>
				</Form>
			</div>
		</>
	);
};

export default SignUp;
