import React, { useState } from "react";

import Nav from "../../lib/components/nav";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import profileImg from "../../lib/assets/profileImage.png";
import RepositoryItem from "../../lib/components/repository";

import "./profile.css";

const Profile = () => {
  const [active, setActive] = useState(1);

  return (
    <div>
      <Nav active={active} setActive={setActive} />
      <div className="profile">
        <div className="column-1">
          <div className="profile-img">
            <img src={profileImg} />
            <div className="smaller-img"></div>
          </div>
          <div className="profile-name">
            <span className="full-name">Caleb Omoijuanfo</span>
            <span className="user-name">Caleb-Omoijuanfo</span>
          </div>
          <div className="follow-button-container">
            <button className="follow-button">Follow</button>
          </div>
          <p className="profile-description">
            trying to be better than yesterday
          </p>
          <div className="people-information">
            <BsPeople className="icon" />
            <div className="follow-info">
              <span className="count">105</span>
              <span className="title">followers</span>
            </div>
            <GoPrimitiveDot className="dot" />
            <div className="follow-info">
              <span className="count">192</span>
              <span className="title">following</span>
            </div>
          </div>
          <div className="profile-social">
            <div className="social-item">
              <MdOutlineLocationOn className="icon" />
              <span>Lagos</span>
            </div>
            <div className="social-item">
              <AiOutlineMail className="icon" />
              <span>c.omoijuanfo@gmail.com</span>
            </div>
            <div className="social-item">
              <AiOutlineTwitter className="icon" />
              <span>@_someTwitterAccount</span>
            </div>
          </div>

          <div className="achievements">
            <span>Achievements</span>
          </div>
        </div>
        <div className="column-2">
          <div className="filter-container">
            <input placeholder="Find a repository..." />
            <button className="drop-down">
              Type <IoMdArrowDropdown className="arrow" />
            </button>
            <button className="drop-down">
              Language <IoMdArrowDropdown className="arrow" />
            </button>
            <button className="drop-down">
              Sort <IoMdArrowDropdown className="arrow" />
            </button>
          </div>

          <RepositoryItem />
          <RepositoryItem />
          <RepositoryItem />
          <RepositoryItem />
        </div>
      </div>
    </div>
  );
};

export default Profile;
