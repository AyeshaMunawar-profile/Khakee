import React, {useState} from "react";
import {Menu, Button, Badge, Typography, Avatar, Image, Space} from "antd";
import {UserOutlined, UserAddOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import "./header.styles.scss";

import {RouteComponentProps, withRouter} from "react-router";
import firebase from "firebase";
import {auth} from "../../Firebase/firebase.utils";
import SHOP_DATA from "../../Pages/shoppage/shop.data";

const {Title} = Typography;

const {SubMenu} = Menu;
interface RouteParams {
	id: string;
}

type PropsType = RouteComponentProps<RouteParams> & {
	currentPage: string;
	currentUser: firebase.User | null;
};

const Header: React.FC<PropsType> = ({currentPage, currentUser, history}) => {
	const [current, setCurrent] = useState(currentPage);
	const handleClick = (event: any) => {
		// console.log("click ", event);
		setCurrent(event.key);
	};
	return (
		<>
			<div className="header">
				<Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
					<Menu.Item key="logo" className="menu-logo btn" onClick={() => history.push("/")}>
						<img className="brand-image" src="../../Common/images/Logo/favicon/logo-192x192.png" alt="logo" />
						<span className="brand-text">
							<Title className="brand-name" level={2}>
								Khakee
							</Title>
							<Title level={5} className="brand-tag-line">
								Paint yourself
							</Title>
						</span>
					</Menu.Item>
					<Menu.Item key="home" className="menu-home">
						Home
					</Menu.Item>
					<SubMenu key="SubMenu" title="Products">
						{SHOP_DATA.map((category) => (
							<Menu.ItemGroup title={category.categoryName} key={`menu-${category.categoryName}-${category.id}`}>
								{category.items.map((item) => (
									<Menu.Item key={`sub-menu-${item.title}-${item.id}`}>{item.title}</Menu.Item>
								))}
							</Menu.ItemGroup>
						))}
					</SubMenu>
					<Menu.Item key="contact-me" className="menu-contact-me">
						Contact Me
					</Menu.Item>
					<Menu.Item key="about-me" className="menu-about-me">
						About Me
					</Menu.Item>
					<Menu.Item key="blog" className="menu-blog">
						Blog
					</Menu.Item>
					<Menu.Item
						key="cart"
						icon={
							<Badge count={5} className="cart-count">
								<ShoppingCartOutlined />
							</Badge>
						}
						className="menu-cart"
					>
						Cart
					</Menu.Item>

					{/* if the current user exists then it means the user is signed in show user's profile instead of sign up button in the header  */}

					{currentUser ? (
						<Menu.Item key="user-profile" className="menu-btn-user-profile btn">
							<Space direction="horizontal">
								{currentUser.photoURL ? (
									<Avatar src={currentUser.photoURL} className="user-avatar" />
								) : (
									<Avatar icon={<UserOutlined />} className="user-avatar" size={20} />
								)}
								{currentUser.displayName && currentUser.displayName}
							</Space>
						</Menu.Item>
					) : (
						<Menu.Item key="sign-up" className="menu-btn-sign-up btn">
							<Button
								className="btn-sign-up btn-gradient btn-primary"
								type="primary"
								shape="round"
								icon={<UserAddOutlined />}
							>
								Sign Up
							</Button>
						</Menu.Item>
					)}
				</Menu>
			</div>
		</>
	);
};
export default withRouter(Header);
