import React from "react";

import { ReactComponent as Chart } from "../../assets/chart.svg";
import Meta from "../meta";
import { GoPrimitiveDot } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";

import "./repository.css";

const RepositoryItem = () => {
  return (
    <div className="repository">
      <div className="title-and-star-container">
        <span className="repo-title">api-design-with-djangorest</span>
        <button>Star</button>
      </div>
      <div className="repo-description">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          eius repellendus nobis totam consectetur quas
        </span>
      </div>
      <div className="repo-chart">
        <Chart />
      </div>
      <div className="repo-meta">
        <Meta
          icon={<GoPrimitiveDot className="icon" style={{ color: "red" }} />}
          title="Python"
        />
        <Meta
          icon={<AiOutlineStar className="icon" style={{ fontSize: "1rem" }} />}
          title="Python"
        />
      </div>
    </div>
  );
};

export default RepositoryItem;
