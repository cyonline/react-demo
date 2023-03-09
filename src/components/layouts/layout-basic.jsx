import React, { useState } from 'react';
import { Layout,Menu } from 'antd';
const { Header, Content } = Layout;
import headerMenuList from '@/components/menus/headerMenu'

function LayoutBasic() {
    return (
        <Layout style={{ height: '100%' }}>
            <Header className="header">
                <div className="logo" />
                <span style={{ color: '#fff' }}>布局1</span>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={headerMenuList} />
            </Header>
            <Layout></Layout>
        </Layout>
    )
}


export default LayoutBasic