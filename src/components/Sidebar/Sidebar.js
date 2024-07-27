import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/city-assets.png'
import './Sidebar.css'
import Home from '../../pages/Home/Home'

const SidebarContainer = styled.div`
  height: 100vh; // Full height of the viewport
  width: 250px;
  background-color: #2c3e50;
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  box-sizing: border-box;
`;

const SidebarItem = styled(Link)`
  color: #ecf0f1;
  text-decoration: none;
  display: block;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  &:hover {
    background-color: #34495e;
  }
`;

const SidebarTitle = styled.h2`
  color: #ecf0f1;
  margin-bottom: 20px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarTitle>
        <img className='logo-img' src={logo} alt="Logo" height={160} width={160}/>
      </SidebarTitle>
      <SidebarItem to="/">Home</SidebarItem>
      <SidebarItem to="/asset-management">Asset Management</SidebarItem>
      <SidebarItem to="/asset-tracking">Asset Tracking</SidebarItem>
      <SidebarItem to="/rewards">Rewards</SidebarItem>
      <SidebarItem to="/anamoly-detection">Anamoly Detection</SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
