import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
const { Header, Content } = Layout;
import headerMenuList from '@/components/menus/headerMenu'
import { Routes, Route, Link } from 'react-router-dom';
import LayoutSide from '@/components/layouts/layout-side'

function LayoutBasic() {
    return (
        <Layout style={{ height: '100%' }}>
            <Header className="header">
                <div className="logo" />
                <span style={{ color: '#fff' }}>布局1</span>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={headerMenuList} >
                    {
                        headerMenuList.map(i=> <Menu.Item><Link to={i.path}>{i.label}</Link></Menu.Item>)
                    }
                    
                </Menu>
            </Header>
            <Layout>
            {/* <LayoutSide></LayoutSide> */}
                <Routes>
                    <Route path="/home" exact element={<Content />} />
                    <Route path="/page" element={<LayoutSide />} />
                </Routes>
            </Layout>
        </Layout>
    )
}


export default LayoutBasic