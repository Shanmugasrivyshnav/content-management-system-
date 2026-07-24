import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../features/auth/authSlice";

const HeaderContainer = styled.header`
  height: 70px;
  background: white;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const LogoutButton = styled.button`
  padding: 10px 16px;
  background: crimson;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  return (
    <HeaderContainer>
      <h2>CMS Dashboard</h2>

      <UserInfo>
        <span>{user?.email || "Admin"}</span>

        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </UserInfo>
    </HeaderContainer>
  );
}

export default Header;
