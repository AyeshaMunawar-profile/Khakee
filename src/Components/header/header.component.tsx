import React, {useState} from "react";
import {Menu, Button, Badge, Typography} from "antd";
import "./header.styles.scss";
import {UserAddOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {RouteComponentProps, withRouter} from "react-router";
import SHOP_DATA from "../../Pages/shoppage/shop.data";

const {Title} = Typography;

const {SubMenu} = Menu;
interface RouteParams {
	id: string;
}

type PropsType = RouteComponentProps<RouteParams> & {
	currentPage: string;
};

const Header: React.FC<PropsType> = ({currentPage, history}) => {
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
							<Title className="brand-name">Khakee</Title>
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
					<Menu.Item key="sign-up" className="menu-btn-sign-up btn">
						<Button className="btn-sign-up btn-primary--pink" type="primary" shape="round" icon={<UserAddOutlined />}>
							Sign Up
						</Button>
					</Menu.Item>
				</Menu>
			</div>
		</>
	);
};
export default withRouter(Header);
