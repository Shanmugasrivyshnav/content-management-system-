import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { getBlocks } from "../api/content";
import BlockRenderer from "../components/Blocks/BlockRenderer";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Home = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const fetchBlocks = async () => {
      try {
        const data = await getBlocks(1);
        setBlocks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlocks();
  }, []);

  return (
    <Container>
      <h1>Welcome to Our Website</h1>

      {blocks.map((block) => (
        <BlockRenderer key={block.id} block={block} />
      ))}
    </Container>
  );
};

export default Home;
