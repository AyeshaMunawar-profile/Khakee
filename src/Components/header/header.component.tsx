import React, {useState} from "react";
import {Menu, Button, Badge, Typography, Avatar, Image, Space} from "antd";
import {
	UserOutlined,
	UserAddOutlined,
	ShoppingCartOutlined,
	LogoutOutlined,
	SolutionOutlined,
	HeartOutlined,
	GlobalOutlined
} from "@ant-design/icons";
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
						My Cart
					</Menu.Item>

					{/* if the current user exists then it means the user is signed in show user's profile instead of sign up button in the header  */}

					{currentUser ? (
						<SubMenu key="user-account-settings" icon={<UserOutlined />} title="My Account">
							<Menu.ItemGroup key="my-account" title="Account settings">
								<Menu.Item className="menu-btn-user-profile btn">
									<Space direction="horizontal">
										{currentUser.photoURL ? (
											<Avatar src={currentUser.photoURL} className="user-avatar" />
										) : (
											<Avatar icon={<UserOutlined />} className="user-avatar" size={20} />
										)}
										{currentUser.displayName && currentUser.displayName}
									</Space>
								</Menu.Item>
								<Menu.Item key="sign-out" className="sign-out">
									<Button
										className="btn-sign-up btn-gradient btn-primary"
										type="primary"
										shape="round"
										icon={<LogoutOutlined />}
									>
										Sign out
									</Button>
								</Menu.Item>
							</Menu.ItemGroup>
							<Menu.ItemGroup key="my-shopping-details" title="Shopping details">
								<Menu.Item
									key="cart"
									icon={
										<Badge count={5} className="cart-count">
											<ShoppingCartOutlined />
										</Badge>
									}
									className="sub-menu-cart"
								>
									My Cart
								</Menu.Item>
								<Menu.Item key="orders" icon={<SolutionOutlined />} className="sub-menu-orders">
									My Orders
								</Menu.Item>
								<Menu.Item key="wishlist" icon={<HeartOutlined />} className="sub-menu-wishlist">
									My Wishlist
								</Menu.Item>
								<Menu.Item key="track-orders" icon={<GlobalOutlined />} className="sub-menu-track-order">
									Track Order
								</Menu.Item>
							</Menu.ItemGroup>
						</SubMenu>
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
