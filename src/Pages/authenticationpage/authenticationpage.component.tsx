import React from "react";
import "./authenticationpage.style.scss";
import SignUp from "../../Components/sign-up/sign-up.component";
import SignIn from "../../Components/sign-in/sign-in.component";

const AuthenticationPage: React.FC = () => {
	return (
		<>
			<div className="authentication-page">
				<SignIn />
				<SignUp />
			</div>
		</>
	);
};

export default AuthenticationPage;
