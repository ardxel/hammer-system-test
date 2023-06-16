import React, {Component} from 'react';
import {Avatar, Divider, Drawer} from 'antd';
import {
	CalendarOutlined,
	CompassOutlined,
	GlobalOutlined,
	MailOutlined,
	MobileOutlined,
	UserOutlined
} from '@ant-design/icons';
import {Link} from "react-router-dom";

export class UserView extends Component {
	render() {
		const { data, visible, close} = this.props;
		return (
			<Drawer
				width={300}
				placement="right"
				onClose={close}
				closable={false}
				visible={visible}
			>
				<Link className="text-center mt-3 d-flex flex-column justify-content-center align-items-center"
							to={`edit-user/${data?.id}`}>
					<Avatar size={80} />
					<h3 className="mt-2 mb-0">{data?.name}</h3>
					<span className="text-muted">{data?.company?.name}</span>
				</Link>
				<Divider dashed />
				<div className="">
					<h6 className="text-muted text-uppercase mb-3">Account details</h6>
					<p>
						<UserOutlined />
						<span className="ml-3 text-dark">id: {data?.id}</span>
					</p>
					<p>
						<CalendarOutlined />
						<span className="ml-3 text-dark">Username:  {data?.username}</span>
					</p>
				</div>
				<div className="mt-5">
					<h6 className="text-muted text-uppercase mb-3">CONTACT</h6>
					<p>
						<MobileOutlined />
						<span className="ml-3 text-dark">{data?.phone}</span>
					</p>
					<p>
						<MailOutlined />
						<span className="ml-3 text-dark">{data?.email? data?.email: '-'}</span>
					</p>
					<p>
						<CompassOutlined />
						<span className="ml-3 text-dark">{data?.address?.city}</span>
					</p>
				</div>
				<div className="mt-5">
					<p>
						<GlobalOutlined />
						<a href="/#" className="ml-3 text-dark">{data?.website? data?.website : '-'}</a>
					</p>
				</div>
			</Drawer>
		)
	}
}

export default UserView
