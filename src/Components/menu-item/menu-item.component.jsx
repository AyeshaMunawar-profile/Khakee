import React from "react";
import "./menu-item.styles.scss";
import "../../SASS/Base/_utilities.scss";
import {withRouter} from "react-router-dom";

const MenuItem = ({title, linkUrl, size, imageUrl, history, match}) => (
	<div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl.toLowerCase()}`)}>
		<div className="background-image" style={{backgroundImage: `url(${imageUrl}`}} />
		<div className="content">
			<h1 className="title font-primary">{title}</h1>
			<span className="subtitle font-secondary">Shop Now</span>
		</div>
	</div>
);

export default withRouter(MenuItem);
