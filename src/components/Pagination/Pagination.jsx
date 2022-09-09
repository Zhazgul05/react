import React from "react";

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <ul
      style={{
        margin: "0",
        padding: "0",
        listStyle: "none",
        display: "flex",
        gap: "15px",
        flexWrap: "wrap",
      }}
    >
      {pages.map((page) => (
        <li
          key={page}
          style={{
            border: "1px solid black",
            padding: "5px 10px",
            cursor: "pointer",
          }}
          onClick={() => paginate(page)}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};
