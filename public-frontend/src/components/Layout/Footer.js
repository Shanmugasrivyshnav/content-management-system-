import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #222;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2026 My CMS Website</p>
    </FooterContainer>
  );
};

export default Footer;
