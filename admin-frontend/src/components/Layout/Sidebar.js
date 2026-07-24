import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.aside`
  width: 250px;
  min-height: 100vh;
  background: #1f2937;
  color: white;
`;

const Logo = styled.div`
  padding: 24px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  border-bottom: 1px solid #374151;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled(NavLink)`
  padding: 16px 24px;
  color: white;
  text-decoration: none;

  &:hover {
    background: #374151;
  }

  &.active {
    background: #2563eb;
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <Logo>CMS Admin</Logo>

      <Menu>
        <MenuItem to="/dashboard">Dashboard</MenuItem>

        <MenuItem to="/pages">Pages</MenuItem>

        <MenuItem to="/pages/create">Create Page</MenuItem>
      </Menu>
    </SidebarContainer>
  );
}

export default Sidebar;
