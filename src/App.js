import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import StartScreen from './StartScreen';
import Survey from './Survey';
import Admin from './Admin';
import Result from './ResultScreen';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </HashRouter>
  );
}

export default App;