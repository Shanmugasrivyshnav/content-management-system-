import React from "react";
import styled from "styled-components";

const Toast = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  min-width: 250px;
  padding: 15px 20px;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  background: ${({ type }) => {
    switch (type) {
      case "success":
        return "#16a34a";
      case "error":
        return "#dc2626";
      case "warning":
        return "#d97706";
      default:
        return "#2563eb";
    }
  }};
`;

function Notification({ message, type }) {
  if (!message) return null;

  return <Toast type={type}>{message}</Toast>;
}

export default Notification;
