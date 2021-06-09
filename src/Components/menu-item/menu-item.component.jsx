import React from "react";
import "./menu-item.styles.scss";
import "../../SASS/Base/_utilities.scss";
const MenuItem = ({ title, imgUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imgUrl}` }}
    />

    <div className="content">
      <h1 className="title font-primary">{title}</h1>
      <span className="subtitle font-secondary">Shop Now</span>
    </div>
  </div>
);

export default MenuItem;
