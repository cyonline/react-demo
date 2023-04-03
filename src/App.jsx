import React, { useState } from 'react';
import './App.less'

import 'antd/dist/antd.min.css'; // or 'antd/dist/antd.less'
import { BrowserRouter, HashRouter, Routes } from 'react-router-dom';
import routerConfig from './router/router'
import { renderRoutes } from './utils/renderRouters'
function App() {
    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    {
                        renderRoutes(routerConfig)
                    }              
                </Routes>
            </HashRouter>
        </div>
    )
}

export default App;