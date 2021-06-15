import React, {useState} from "react";
import {Menu, Button, Badge} from "antd";
import "./header.styles.scss";
import SHOP_DATA from "../../Pages/shoppage/shop.data";
import {UserAddOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {withRouter} from "react-router";
const {SubMenu} = Menu;
const Header = (props) => {
	const [current, setCurrent] = useState("home");
	const handleClick = (e) => {
		console.log("click ", e);
		setCurrent(e.key);
	};
	return (
		<>
			<div className={"header"}>
				<Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
					<Menu.Item key="logo" className={"menu-logo btn"} onClick={() => props.history.push("/")}>
						<img src={"../../Common//images/tape.png"} alt="logo" width={"100px"} />
					</Menu.Item>
					<Menu.Item key="home" className={"menu-home"}>
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
					<Menu.Item key="contact-me" className={"menu-contact-me"}>
						Contact Me
					</Menu.Item>
					<Menu.Item key="about-me" className={"menu-about-me"}>
						About Me
					</Menu.Item>
					<Menu.Item key="blog" className={"menu-blog"}>
						Blog
					</Menu.Item>
					<Menu.Item
						key="cart"
						icon={
							<Badge count={5} className={"cart-count"}>
								<ShoppingCartOutlined />
							</Badge>
						}
						className={"menu-cart"}
					>
						Cart
					</Menu.Item>
					<Menu.Item key="sign-up" className={"menu-btn-sign-up btn"}>
						<Button
							className={"btn-sign-up btn-primary--pink"}
							type={"primary"}
							shape={"round"}
							icon={<UserAddOutlined />}
						>
							Sign Up
						</Button>
					</Menu.Item>
				</Menu>
			</div>
		</>
	);
};
export default withRouter(Header);
