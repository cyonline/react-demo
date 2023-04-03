import { LaptopOutlined, NotificationOutlined, UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import React from 'react';

let menuList = [
    {
        path: '/home',
        name: 'home',
        key: 0,
        label: '首页',
        icon: <UserOutlined></UserOutlined>
    },
    {
        path: '/one',
        name: 'page1',
        key: 1,
        label: '菜单1',
        icon: <LaptopOutlined></LaptopOutlined>
    },
    {
        path: '/two',
        name: 'page2',
        key: 2,
        label: '菜单2',
        icon: <NotificationOutlined></NotificationOutlined>
    },
]


export default menuList