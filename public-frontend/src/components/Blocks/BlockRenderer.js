import React from "react";
import TextBlock from "./TextBlock";
import TableBlock from "./TableBlock";
import MathBlock from "./MathBlock";

const BlockRenderer = ({ block }) => {
  if (!block) return null;

  switch (block.type) {
    case "header":
      return (
        <TextBlock
          data={{
            text: block.data.text,
            level: 1,
          }}
        />
      );

    case "text":
      return <TextBlock data={block.data} />;

    case "table":
      return <TableBlock data={block.data} />;

    case "math":
      return <MathBlock data={block.data} />;

    default:
      return (
        <div style={{ color: "red" }}>Unsupported block type: {block.type}</div>
      );
  }
};

export default BlockRenderer;
