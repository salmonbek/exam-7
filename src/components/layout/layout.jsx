import { useEffect, useState } from "react";
import Bottom from "../sidebars/Bottom";
import LeftSidebar from "../sidebars/LeftSidebar";
import RightSidebar from "../sidebars/RightSidebar";
import style from "./index.module.scss";

import { useLocalStore } from "../../utils/store";

import { API_ID, API_SECRET, AccauntURL, BaseURL } from "../../utils/api";

export default function Layout({ children }) {
  const { setAccessToken, access_token, currentAudio } = useLocalStore(
    (s) => s
  );
  const {} = useState();

  useEffect(() => {
    fetch(AccauntURL + `/token`, {
      method: "POST",
      body: `grant_type=client_credentials&client_id=${API_ID}&client_secret=${API_SECRET}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
        }
      })
      .then((data) => {
        setAccessToken(data.access_token);
      });
  }, []);

  return (
    <div className={style.layout}>
      <LeftSidebar />
      <div className={style.layout__main__pages}>{children}</div>
      <RightSidebar />
      {currentAudio && <Bottom audio={currentAudio} />}
    </div>
  );
}
