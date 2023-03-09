import React, { useState } from 'react';
import './App.less'

import 'antd/dist/antd.min.css'; // or 'antd/dist/antd.less'

import LayoutBasic from './components/layouts/layout-basic'
import LayoutSide from './components/layouts/layout-side'


function App() {
    
    return (
        <div className="App">
            <LayoutBasic></LayoutBasic>
            {/* <LayoutSide /> */}
        </div>
    )
}

export default App;