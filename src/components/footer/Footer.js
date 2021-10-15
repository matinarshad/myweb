import React from "react";

function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <>
      <div
        style={{
          textAlign: "center",
          position: "relative",
          bottom: "5px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        © {currentYear} All rights reserved to Matin
      </div>
    </>
  );
}

export default Footer;
