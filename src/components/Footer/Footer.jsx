import React from "react";

function footer() {
  const date = new Date();

  return (
    <footer
      style={{
        marginTop: "30px",
        padding: "15px 0",
        textAlign: "center",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div className="container">
        <p>Copyright. Altair.JS. &copy; {date.getFullYear()}</p>
      </div>
    </footer>
  );
}

export default footer;
