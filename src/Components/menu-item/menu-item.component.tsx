import React from "react";
import {withRouter, RouteComponentProps} from "react-router-dom";
import "./menu-item.styles.scss";
import "../../SASS/Base/_utilities.scss";

interface RouteParams {
	id: string;
}

type PropsType = RouteComponentProps<RouteParams> & {
	title: string;
	linkUrl: string;
	size?: string;
	imageUrl: string;
};

const MenuItem: React.FC<PropsType> = ({...props}) => {
	const handleClick = () => {
		props.history.push(`${props.match.url}${props.linkUrl.toLowerCase()}`);
	};
	return (
		<div
			role="button"
			className={`${props.size} menu-item`}
			onClick={() => handleClick()}
			onKeyDown={() => handleClick()}
			tabIndex={0}
		>
			<div className="background-image" style={{backgroundImage: `url(${props.imageUrl}`}} />
			<div className="content">
				<h1 className="title font-primary">{props.title}</h1>
				<span className="subtitle font-secondary">Shop Now</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
