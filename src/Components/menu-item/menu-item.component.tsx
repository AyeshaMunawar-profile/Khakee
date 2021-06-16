import React from "react";
import {Typography} from "antd";
import {withRouter, RouteComponentProps} from "react-router-dom";
import "./menu-item.styles.scss";
import "../../SASS/Base/_utilities.scss";

const {Title} = Typography;
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
				<Title className="title font-primary u-margin-top-small">{props.title}</Title>
				<span className="subtitle ">
					<Title level={5} className="font-secondary font-weight-normal">
						Shop Now
					</Title>
				</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
