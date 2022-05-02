import React from "react";

import CountBadge from "../countBadge";
import { FiBookOpen, FiPackage } from "react-icons/fi";
import { GoRepo } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { AiOutlineStar } from "react-icons/ai";

import "./nav.css";

const Nav = ({ active, setActive, data }) => {
  return (
    <div className="header">
      <div
        className={`menu ${active === 0 ? "active" : null}`}
        onClick={() => setActive(0)}
      >
        <FiBookOpen className="icon" />
        <span className="title">Overview</span>
      </div>
      <div
        className={`menu  ${active === 1 ? "active" : null}`}
        onClick={() => setActive(1)}
      >
        <GoRepo className="icon" />
        <span className="title">Repositories</span>
        <CountBadge count={data?.profile?.public_repos} />
      </div>
      <div
        className={`menu  ${active === 2 ? "active" : null}`}
        onClick={() => setActive(2)}
      >
        <GrProjects className="icon" />
        <span className="title">Projects</span>
      </div>
      <div
        className={`menu  ${active === 3 ? "active" : null}`}
        onClick={() => setActive(3)}
      >
        <FiPackage className="icon" />
        <span className="title">Packages</span>
      </div>
      <div
        className={`menu  ${active === 4 ? "active" : null}`}
        onClick={() => setActive(4)}
      >
        <AiOutlineStar className="icon" />
        <span className="title">Stars</span>
        <CountBadge count={90} />
      </div>
    </div>
  );
};

export default Nav;
