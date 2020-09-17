import React from 'react';
import { Layout, Menu, Space, Typography, Avatar } from 'antd';
import {
  BookOutlined,
  UserOutlined,
  CheckCircleOutlined,
  RiseOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';
import { AmplifySignOut } from '@aws-amplify/ui-react';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

class Dashboard extends React.Component {
  rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

  state = {
    collapsed: false,
    openKeys: ['sub1'],
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider theme="light" width="300" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Space style={{ position: "absolute", top: "5px", right: "5px" }} align="center">
            <Avatar style={{ background: "#fff", color: "#333"}} size={20} icon={<UserOutlined />}></Avatar>
            <p style={{ fontSize: "10px", marginBottom: 0 }}>Manage account</p>
          </Space>
          <Space style={{ padding: '40px 20px' }} size={10}>
            <Avatar size={42} style={{ background: "#fff", color: "#333", border: "1px solid #333"}}>U</Avatar>
            <Space direction="vertical" size="0">
              <Title level={3} style={{ marginBottom: 0, fontWeight: "400" }}>Company Name</Title>
              <p style={{ marginBottom: 0 }}>View your badges</p>
            </Space>
          </Space>
          <Menu theme="light" mode="inline" openKeys={this.state.openKeys} onOpenChange={this.onOpenChange}>
            <SubMenu key="sub1" icon={<CheckCircleOutlined />} title="Minimum Requirements">
              <Menu.Item key="1">External Impact</Menu.Item>
              <Menu.Item key="2">Culture</Menu.Item>
              <Menu.Item key="3">Leadership</Menu.Item>
              <Menu.Item key="4">Governance</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<RiseOutlined />} title="Continuous Improvement">
              <Menu.Item key="4">Update Application</Menu.Item>
              <Menu.Item key="5">External Impact Reporting</Menu.Item>
              <Menu.Item key="6">Electives</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<BookOutlined />} title="Curriculum">
              <Menu.Item key="7">Module 1</Menu.Item>
              <Menu.Item key="8">Module 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<QuestionCircleOutlined />} title="Tools and Support">
              <Menu.Item key="9">Tool 1</Menu.Item>
              <Menu.Item key="10">Tool 2</Menu.Item>
              <Menu.Item key="11">Need help? Contact us.</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Content Area
            </div>
            <AmplifySignOut buttonText="Logout"></AmplifySignOut>
          </Content>
          <Footer style={{ textAlign: 'center', fontSize: '12px'  }}>Canopy KY ©2020</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;