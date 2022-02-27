import React from "react";
import List from "./List";

const Posts = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: 50,
        }}
      >
        <List />
      </div>
    </>
  );
};
export default Posts;
