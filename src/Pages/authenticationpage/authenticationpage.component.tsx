import React from "react";
import {Col, Row} from "antd";
import "./authenticationpage.style.scss";
import SignUp from "../../Components/sign-up/sign-up.component";
import SignIn from "../../Components/sign-in/sign-in.component";

const AuthenticationPage: React.FC = () => {
	return (
		<>
			<div className="authentication-page">
				<div className="section">
					<Row>
						<Col xs={{span: 24}} xl={{span: 11}}>
							<SignIn />
						</Col>
						<Col xs={{span: 24}} xl={{span: 2}}>
							{" "}
						</Col>
						<Col xs={{span: 24}} xl={{span: 11}}>
							<SignUp />
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
};

export default AuthenticationPage;
