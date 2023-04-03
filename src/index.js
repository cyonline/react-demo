


import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter,HashRouter } from 'react-router-dom';
/*
BrowserRouter使用 history 模式
HashRouter使用 hash 模式 
 */


ReactDom.createRoot(
    document.getElementById('root')
).render(
    // <HashRouter>
        <App />
    // </HashRouter>
)