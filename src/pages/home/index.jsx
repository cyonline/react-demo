import React from 'react'
import { Layout, Card, Row, Col } from 'antd';

import './index.less'
import LayoutBasic from '../../components/layouts/layout-basic'

export default function Home() {
    return (
        // <LayoutBasic content={
            <Layout.Content >
                <div className="site-layout-section">
                    <Card className="section-card"></Card>
                    <Card className="section-card"></Card>
                    <Card className="section-card"></Card>
                </div>
                <div className="site-layout-content">Content</div>
                <div className="site-layout-content">Content</div>
            </Layout.Content>
        // }>

        // </LayoutBasic>
    )
}

