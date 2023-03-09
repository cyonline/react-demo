import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Button, Space } from 'antd';

import { Routes, Route, Link } from 'react-router-dom';
import ComponentOne from '@/pages/ComponentOne';
import ComponentTwo from '@/pages/ComponentTwo';
// import pageRouter from './router/routers.js'
import siderMenuList from '@/components/menus/siderMenu'
const { Header, Content, Sider } = Layout;


function LayoutSide() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <>
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
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Routes path="/page">
                            <Route path="/one" element={<ComponentOne />} />
                            <Route path="/two" element={<ComponentTwo />} />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}


export default LayoutSide