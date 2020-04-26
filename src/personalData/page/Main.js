import React from "react";
import style from "./app.less";
import Navbar from "../../components/NavBar";
import Page from "../../components/Page";
import { NoticeBar } from "antd-mobile";
import uploadLogo from "../images/uploadLogo.jpg";

const Notice = () => (
	<div className={style.NoticeBar}>
		<NoticeBar marqueeProps={{ loop: true, style: { padding: "0 7.5px" } }}>
			您好！根据国家关于互联网医疗非首诊的要求，请您先上传您的个人信息
		</NoticeBar>
	</div>
);

export default class extends React.PureComponent {
	goShow = () => {
		console.log(this.props);
		this.props.history.push("/show");
	};
	render(){
		return(
			<Page className={style.bgColor}>
				<Navbar title={"个人资料"} opacity color="#000" />
				<div className={style.uploadLogo}>
					<Notice />
					<img src={uploadLogo} alt="" onClick={this.goShow} />
				</div>
			</Page>
		)
	}
}



