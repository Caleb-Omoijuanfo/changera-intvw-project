import React from "react";

import { ReactComponent as Chart } from "../../assets/chart.svg";
import Meta from "../meta";
import { GoPrimitiveDot } from "react-icons/go";
import moment from "moment";

import "./repository.css";

const RepositoryItem = ({ repo }) => {
  return (
    <div className="repository">
      <div className="title-and-star-container">
        <span className="repo-title">{repo?.name}</span>
        <button>Star</button>
      </div>
      <div className="repo-description">
        <span>{repo?.description}</span>
      </div>
      <div className="repo-chart">
        <Chart />
      </div>
      <div className="repo-meta">
        <Meta
          icon={<GoPrimitiveDot className="icon" style={{ color: "red" }} />}
          title={repo?.language}
        />
        <div style={{ marginLeft: "0.5rem" }}>
          <Meta title={` Updated at ${moment(repo?.updated_at).fromNow()}`} />
        </div>
      </div>
    </div>
  );
};

export default RepositoryItem;
