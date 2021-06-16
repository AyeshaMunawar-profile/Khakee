import React from "react";
import {Typography} from "antd";
import "./sign-in.style.scss";

const {Title} = Typography;

const SignIn: React.FC = () => {
	return (
		<>
			<div className="sign-in-form section">
				<Title className="section-heading-main">I already have and account</Title>
				<Title className="section-heading-sub" level={3}>
					Sign in using your email and password
				</Title>
			</div>
		</>
	);
};

export default SignIn;
