import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const TextContainer = styled.div`
  padding: 1rem;
  line-height: 1.6;
`;

const TextBlock = ({ data }) => {
  const { text, level = 1 } = data;

  return (
    <TextContainer>
      {level === 1 ? (
        <h1>{text}</h1>
      ) : level === 2 ? (
        <h2>{text}</h2>
      ) : (
        <ReactMarkdown>{text}</ReactMarkdown>
      )}
    </TextContainer>
  );
};

export default TextBlock;
