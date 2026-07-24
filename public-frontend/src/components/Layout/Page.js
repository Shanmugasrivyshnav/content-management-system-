import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import { getBlocks } from "../../api/content";
import BlockRenderer from "../Blocks/BlockRenderer";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Page = ({ pageId }) => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const fetchBlocks = async () => {
      try {
        const data = await getBlocks(pageId);
        setBlocks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlocks();
  }, [pageId]);

  return (
    <>
      <Header />

      <PageContainer>
        {blocks.map((block) => (
          <BlockRenderer key={block.id} block={block} />
        ))}
      </PageContainer>

      <Footer />
    </>
  );
};

export default Page;
