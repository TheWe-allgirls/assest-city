import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home/Home';
import QueryBoard from './pages/QueryBoard/QueryBoard'
import Scheme from './pages/Scheme/Scheme';
import Chatbot from './pages/Chatbot/Chatbot';
import Report from './pages/Report/Report';
import Navbar from './components/Navbar/Navbar';
import Reward from './pages/Rewards/Rewards'
import Sidebar from './components/Sidebar/Sidebar';
import styled from 'styled-components';
import './App.css';

const MainContent = styled.div`
  margin-left: 250px; // Adjust for sidebar width
  margin-top: 60px; // Adjust for navbar height
  padding: 20px;
  height: calc(100vh - 60px); // Subtract navbar height from the full viewport height
  overflow-y: auto; // Add scroll if content exceeds the height
`;

function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/query-board" element={<QueryBoard />} />
          <Route path="/scheme" element={<Scheme />} />
          <Route path="/report" element={<Report />} />
          <Route path="/chatbot" element={<Chatbot />} />
          
        </Routes>
      </MainContent>
    </>
  );
}

export default App;
