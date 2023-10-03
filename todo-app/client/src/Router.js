// src/Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';

function TodoRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/todos" element={<App />} />
            </Routes>
        </Router>
    );
}

export default TodoRouter;
