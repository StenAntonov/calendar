import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Calendar from './components/Calendar';
import React from 'react';
 
function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Calendar />} />
          <Route exact path="/home" element={<Calendar />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
