import React from "react";

function TimeLineItem({ title, date, location, description }) {
  return (
    <>
      <div className="resume_timeline">
        <div className="resume_timeline_item">
          <h4 class="resume_timeline_item_title">{title && title}</h4>
          <span className="color_span">{date && date}</span>
          <span>{location && location}</span>
          <p class="resume_timeline_item_description">
            {description && description}
          </p>
        </div>
      </div>
    </>
  );
}

export default TimeLineItem;
