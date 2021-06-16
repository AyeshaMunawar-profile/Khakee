import React from "react";
import {Typography} from "antd";
import "./sign-up.style.scss";

const {Title} = Typography;

const SignUp: React.FC = () => {
	return (
		<>
			<div className="sign-up-form section">
				<Title>Donnot have and account ?</Title>
				<Title className="section-heading-sub" level={3}>
					Cerate a new account using your email and password
				</Title>
			</div>
		</>
	);
};

export default SignUp;
