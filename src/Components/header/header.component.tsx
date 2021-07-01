import React, {useState} from "react";
import {toHeaderCase, toSnakeCase} from "js-convert-case";
import {Menu, Button, Badge, Typography, Avatar, Image, Space, Row, Col, Divider} from "antd";
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
import SHOP_DATA from "../../Pages/gallerypage/shop.data";
import MERCHANDISE_DATA from "../../Pages/gallerypage/merchandise.data";

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
					<Menu.Item key="header-logo" className="menu-logo btn" onClick={() => history.push("/")}>
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
					<Menu.Item key="menu-item-home" className="menu-home" onClick={() => history.push("/")}>
						Home
					</Menu.Item>
					<Menu.Item key="menu-item-gallery" className="menu-gallery" onClick={() => history.push("/gallery")}>
						Gallery
					</Menu.Item>
					<SubMenu key="submenu-products" title="Products">
						<Row>
							{SHOP_DATA.map((category) => (
								<Col>
									<Menu.ItemGroup
										title={toHeaderCase(category.categoryName)}
										key={`submenu-${toSnakeCase(category.categoryName)}-${category.id}`}
										className="menu-column"
									>
										{category.items.map((item) => (
											<Menu.Item
												key={`submenu-${toSnakeCase(category.categoryName)}-${toSnakeCase(item.title)}-${item.id}`}
											>
												{toHeaderCase(item.title)}
											</Menu.Item>
										))}
									</Menu.ItemGroup>
								</Col>
							))}
						</Row>
					</SubMenu>
					<SubMenu key="submenu-merchandise" title="Merchandise">
						<Row>
							{MERCHANDISE_DATA.map((category) => (
								<Col>
									<Menu.ItemGroup
										title={toHeaderCase(category.categoryName)}
										key={`submenu-${toSnakeCase(category.categoryName)}-${category.id}`}
										className="menu-column"
									>
										{category.items.map((item) => (
											<Menu.Item
												key={`submenu-${toSnakeCase(category.categoryName)}-${toSnakeCase(item.title)}-${item.id}`}
											>
												{toHeaderCase(item.title)}
											</Menu.Item>
										))}
									</Menu.ItemGroup>
								</Col>
							))}
						</Row>
					</SubMenu>
					<Menu.Item key="menu-item-contact-me" className="menu-contact-me" onClick={() => history.push("/contact-me")}>
						Contact Me
					</Menu.Item>
					<Menu.Item key="menu-item-about-me" className="menu-about-me" onClick={() => history.push("/about-me")}>
						About Me
					</Menu.Item>
					<Menu.Item key="menu-item-blog" className="menu-blog" onClick={() => history.push("/blog")}>
						Blog
					</Menu.Item>
					<Menu.Item
						key="menu-item-cart"
						icon={
							<Badge count={5} className="cart-count">
								<ShoppingCartOutlined />
							</Badge>
						}
						className="menu-cart"
						onClick={() => history.push("/my-cart")}
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
										{currentUser.displayName ? toHeaderCase(currentUser.displayName) : "Loading ..."}
									</Space>
								</Menu.Item>
								<Menu.Item key="sign-out" className="sign-out">
									<Button
										className="btn-sign-out btn-gradient btn-primary"
										type="primary"
										shape="round"
										icon={<LogoutOutlined />}
										onClick={() => auth.signOut()}
									>
										Sign out
									</Button>
								</Menu.Item>
							</Menu.ItemGroup>
							<Menu.ItemGroup key="my-shopping-details" title="Shopping details">
								<Menu.Item
									key="submenu-cart"
									icon={
										<Badge count={5} className="cart-count">
											<ShoppingCartOutlined />
										</Badge>
									}
									className="sub-menu-cart"
								>
									My Cart
								</Menu.Item>
								<Menu.Item key="submenu-orders" icon={<SolutionOutlined />} className="sub-menu-orders">
									My Orders
								</Menu.Item>
								<Menu.Item key="subemenu-wishlist" icon={<HeartOutlined />} className="sub-menu-wishlist">
									My Wishlist
								</Menu.Item>
								<Menu.Item key="submenu-track-orders" icon={<GlobalOutlined />} className="sub-menu-track-order">
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
								onClick={() => history.push("./sign-in")}
							>
								Sign in
							</Button>
						</Menu.Item>
					)}
				</Menu>
			</div>
		</>
	);
};
export default withRouter(Header);
