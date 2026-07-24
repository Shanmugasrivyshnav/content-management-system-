import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: #222;
  color: white;
  padding: 1rem 2rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h2>My CMS Website</h2>
    </HeaderContainer>
  );
};

export default Header;
