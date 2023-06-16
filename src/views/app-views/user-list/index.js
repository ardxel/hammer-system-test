import React, {Component} from 'react'
import {Button, Card, message, Table, Tooltip} from 'antd';
import {DeleteOutlined, EyeOutlined} from '@ant-design/icons';
import userData from "assets/data/user-list.data.json";
import UserView from "./UserView";
import exampleService from "services/ExampleService";
import AvatarStatus from "components/shared-components/AvatarStatus";
import {values} from "lodash/object";

export class UserList extends Component {

  state = {
    users: userData,
    userProfileVisible: false,
    selectedUser: null
  }

  componentDidMount() {
    // I blocked the interceptor in auth/FetchInterceptor.js
    const headers = {'Content-type': 'application/json; charset=UTF-8'};
    exampleService
      .getUser({headers})
      .then(
        (response) => {
          console.log(response.data);
          this.setState({
            users: response.data
          })
        },
        (error) => console.log(error)
      );
  }

  deleteUser = userId => {
    this.setState({
      users: this.state.users.filter(item => item.id !== userId),
    })
    message.success({content: `Deleted user ${ userId }`, duration: 2});
  }

  showUserProfile = userInfo => {
    this.setState({
      userProfileVisible: true,
      selectedUser: userInfo
    });
  };

  closeUserProfile = () => {
    this.setState({
      userProfileVisible: false,
      selectedUser: null
    });
  }

  render() {
    const {users, userProfileVisible, selectedUser} = this.state;
    const tableColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        render: (_, record) => (
          <AvatarStatus name={ record.name } subTitle={ record.email }/>
        ),
        sorter: {
          compare: (a,b) => a.name.length - b.name.length
        }
      },
      {
        title: 'Username',
        dataIndex: 'username',
        render: (_, record) => (
          <span>{ record.username }</span>
        ),
        sorter: {
          compare: (a, b) => a.username.length - b.username.length,
        },
      },
      {
        title: 'Company',
        dataIndex: 'company',
        render: (_, record) => (
          <div className={'d-flex flex-column'}>
            { values(record.company).map((value, index) => (
              <span key={index}>{ value }</span>
            )) }
          </div>
        ),
        sorter: (a, b) => JSON.stringify(a.company).length - JSON.stringify(b.company).length
      },
      {
        title: 'Address',
        dataIndex: 'address',
        render: (_, record) => (
          <div className={'d-flex flex-column'}>
            <span>{ record?.address?.city }</span>
            <span>{ record?.address?.street }</span>
          </div>
        ),
        sorter: {
          compare: (a, b) => a.address?.city?.length - b.address?.city?.length,
        },
      },
      {
        title: '',
        dataIndex: 'actions',
        render: (_, elm) => (
          <div className="text-right">
            <Tooltip title="View">
              <Button type="primary" className="mr-2" icon={ <EyeOutlined/> } onClick={ () => {
                this.showUserProfile(elm)
              } } size="small"/>
            </Tooltip>
            <Tooltip title="Delete">
              <Button danger icon={ <DeleteOutlined/> } onClick={ () => {
                this.deleteUser(elm.id)
              } } size="small"/>
            </Tooltip>
          </div>
        )
      }
    ];
    return (
      <Card bodyStyle={ {'padding': '0px'} }>
        <Table
          columns={ tableColumns }
          dataSource={ users }
          rowKey='id'
          onRow={(record, index) => {
            return record
          }}/>
        <UserView data={ selectedUser } visible={ userProfileVisible } close={ () => {
          this.closeUserProfile()
        } }/>
      </Card>
    )
  }
}

export default UserList
