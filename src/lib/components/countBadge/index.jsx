import React from "react";

import "./countBadge.css";

const CountBadge = ({ count }) => {
  return <span className="menu-badge">{count}</span>;
};

export default CountBadge;
