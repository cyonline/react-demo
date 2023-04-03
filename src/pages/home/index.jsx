import React from 'react'
import { Layout,Card,Row,Col } from 'antd';

import './index.less'
export default function Home() {
    return (
        <div>
            <Layout.Content style={{padding: '20px 50px'}}>
                <div className="site-layout-section">
                    <Card className="section-card"></Card>
                    <Card className="section-card"></Card>
                    <Card className="section-card"></Card>
                </div>
                <div className="site-layout-content">Content</div>
                <div className="site-layout-content">Content</div>
            </Layout.Content>
        </div>
    )
}

