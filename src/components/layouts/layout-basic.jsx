import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
const { Header, Content } = Layout;
import headerMenuList from '@/components/menus/headerMenu'
import { Routes, Route, Link,NavLink } from 'react-router-dom';
import LayoutSide from '@/components/layouts/layout-side'
import Home from '@/pages/home';

function LayoutBasic() {
    return (
        <Layout style={{ height: '100%' }}>
            <Header className="header">
                <div className="logo" />
                <span style={{ color: '#fff' }}>布局1</span>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} >
                    {
                        headerMenuList.map((i,index)=> <Menu.Item key={index}><Link to={i.path}>{i.label}</Link></Menu.Item>)
                    }
                </Menu>
            </Header>
            <Layout>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/page/*" element={<LayoutSide />}>
                        {/* <Route path="/page/one" element={<ComponentOne />} />
                        <Route path="/page/two" element={<ComponentTwo />} /> */}
                    </Route>
                </Routes>
            </Layout>
        </Layout>
    )
}


export default LayoutBasic