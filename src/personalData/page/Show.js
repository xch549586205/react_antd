import React from "react";
import style from './app.less';
import Navbar from "../../components/NavBar"
import Page from "../../components/Page";

function Show(props) {
	console.log(props);
	return (
		<Page className={style.bgColor}>
			<Navbar title = {"个人资料"} />
			<div className={style.a1} >
				<p>React with show</p>
			</div>
		</Page>
	);
}

export default Show
