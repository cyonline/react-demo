import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Button } from 'antd';
const { Header, Content, Sider } = Layout;
import siderMenuList from '@/components/menus/siderMenu'

import { Routes, Route, Link, Outlet } from 'react-router-dom';

function LayoutBasic() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Layout style={{ height: '100%' }}>
            <Header className="header">
                <div className="logo" />
                <span style={{ color: '#fff' }}>系统名</span>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} >
                    
                </Menu>
            </Header>
            <Layout >
                <Sider width={200} className="site-layout-background"
                    trigger={null} collapsible collapsed={collapsed}>
                    <Button
                        type="primary"
                        onClick={toggleCollapsed}
                        style={{
                            marginBottom: 16,
                        }}
                    >
                        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </Button>
                    <Menu
                        mode="inline"
                    >
                        {siderMenuList.map((i) => {
                            return (
                                <Menu.Item key={i.key} icon={i.icon}><Link to={i.path}>{i.label}</Link></Menu.Item>
                            )
                        })}
                    </Menu>
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Outlet></Outlet>
                </Layout>
            </Layout>
        </Layout>
    )
}


export default LayoutBasic