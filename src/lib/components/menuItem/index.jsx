import React from "react";

import { FiBookOpen } from "react-icons/fi";

const MenuItem = () => {
  return (
    <div style={{ display: "flex" }}>
      <span>
        <FiBookOpen />
      </span>
      <div>Overview</div>
    </div>
  );
};

export default MenuItem;
