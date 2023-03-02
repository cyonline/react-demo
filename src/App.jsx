import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ComponentOne from './pages/ComponentOne';
import ComponentTwo from './pages/ComponentTwo';

function App() {
    return (
        <div className="App">
            <div><Link to="/">组件1</Link></div>
            <div><Link to="/two">组件2</Link></div>
            <Routes>
                <Route path="/" exact element={<ComponentOne />} />
                <Route path="/two" element={<ComponentTwo />} />
            </Routes>
        </div>
    )
}

export default App;