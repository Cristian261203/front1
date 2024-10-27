import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './routes/login/LoginPag';
import SignPage from './routes/sign/SignPag.jsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sign" element={<SignPage />} />
            </Routes>
        </Router>
    );
};

export default App;
