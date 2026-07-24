import React from "react";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import styled from "styled-components";

const MathContainer = styled.div`
  padding: 1rem;
  font-size: 1.2rem;
`;

const MathBlock = ({ data }) => {
  const { formula, display = "block" } = data;

  return (
    <MathContainer>
      {display === "inline" ? (
        <InlineMath math={formula} />
      ) : (
        <BlockMath math={formula} />
      )}
    </MathContainer>
  );
};

export default MathBlock;
