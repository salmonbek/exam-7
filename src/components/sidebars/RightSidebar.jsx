import React from "react";
import style from "./index.module.scss";

import plus from "../../assets/plus.svg";
import friends from "../../assets/friends.svg";

const RightSidebar = () => {
  return (
    <div className={style.right__sidebar}>
      <div className={style.right__sidebar__top}>
        <h4>Friend Activity </h4>
        <div>
          <img src={plus} alt="" />
        </div>
      </div>
      <p>Let friends and followers on Spotify see what you’re listening to.</p>
      <div>
        <img src={friends}></img>
        <img src={friends}></img>
        <img src={friends}></img>
      </div>
      <p>
        Go to Settings Social and enable “Share my listening activity on
        Spotify.’ You can turn this off at any time.
      </p>
      <button className={style.right__sidebar__button}>Settings</button>
    </div>
  );
};

export default RightSidebar;
