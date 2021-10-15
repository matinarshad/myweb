import React from "react";
import "../topBanner/topBanner.css";
import Typing from "react-typing-animation";

function TopBanner({ image, h1_text, h1_span, h2_text, h2_span }) {
  return (
    <div
      className="banner_wrrapper"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="banner_wrrapper_content">
        <Typing>
          <h1>
            {h1_text} <span>{h1_span}</span>
          </h1>
        </Typing>
        <Typing>
          <Typing.Delay ms={2000} />
          <h2>
            {" "}
            <span>{h2_span}</span> {h2_text}
          </h2>
        </Typing>
      </div>
    </div>
  );
}

export default TopBanner;
