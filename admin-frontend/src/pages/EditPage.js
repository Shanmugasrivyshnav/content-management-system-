import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import BlockEditor from "../components/Editor/BlockEditor";

import {
  getBlocks,
  createBlock,
  updateBlock,
  deleteBlock,
} from "../api/content";

const Container = styled.div`
  padding: 30px;
`;

const BlockCard = styled.div`
  background: white;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
`;

const Button = styled.button`
  padding: 10px 18px;
  margin-right: 10px;
  margin-top: 15px;
  cursor: pointer;
`;

function EditPage() {
  const { pageId } = useParams();
  const navigate = useNavigate();

  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBlocks = useCallback(async () => {
    try {
      const data = await getBlocks(pageId);
      setBlocks(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [pageId]);

  useEffect(() => {
    loadBlocks();
  }, [loadBlocks]);

  const addTextBlock = async () => {
    try {
      await createBlock({
        pageId,
        type: "text",
        data: {
          type: "doc",
          content: [],
        },
        orderIndex: blocks.length,
      });

      loadBlocks();
    } catch (err) {
      console.error(err);
    }
  };

  const saveEditor = async (blockId, content) => {
    try {
      await updateBlock(blockId, {
        data: content,
      });

      setBlocks((prev) =>
        prev.map((block) =>
          block._id === blockId ? { ...block, data: content } : block,
        ),
      );
    } catch (err) {
      console.error(err);
      alert("Save failed.");
    }
  };

  const removeBlock = async (blockId) => {
    if (!window.confirm("Delete this block?")) return;

    try {
      await deleteBlock(blockId);

      setBlocks((prev) => prev.filter((block) => block._id !== blockId));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <h2>Edit Page</h2>

      <Button onClick={addTextBlock}>Add Text Block</Button>

      <Button onClick={() => navigate("/pages")}>Back</Button>

      <br />
      <br />

      {blocks.length === 0 && <p>No blocks available.</p>}

      {blocks.map((block) => (
        <BlockCard key={block._id}>
          <h4>{block.type}</h4>

          <BlockEditor
            content={block.data}
            onUpdate={(content) => saveEditor(block._id, content)}
          />

          <Button onClick={() => removeBlock(block._id)}>Delete</Button>
        </BlockCard>
      ))}
    </Container>
  );
}

export default EditPage;
