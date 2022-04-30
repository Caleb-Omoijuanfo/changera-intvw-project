import React from "react";

import "./meta.css";

const Meta = ({ icon = null, title }) => {
  return (
    <div className="meta-data">
      {icon}
      <span>{title}</span>
    </div>
  );
};

export default Meta;
