import React from "react";
import BlockItem from "../block_item/BlockItem";

const Block = ({ blocks }) => {
  return (
    <div className="Colors">
      {blocks.map((block) => {
        return <BlockItem color={block.block} key={block.id} />;
      })}
    </div>
  );
};

export default Block;
