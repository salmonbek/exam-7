import { Link } from "react-router-dom";
import style from "./index.module.scss";
import { useEffect, useState } from "react";

import { BaseURL } from "../../utils/api";
import { useLocalStore } from "../../utils/store";

const LeftSidebar = () => {
  const [playlists, setPlaylists] = useState([]);
  const { access_token } = useLocalStore();

  useEffect(() => {
    fetch(BaseURL + "/browse/featured-playlists?limit=10&offer=5", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => res.json())
      .then((d) => setPlaylists(d.playlists));
  }, []);

  console.log(playlists);
  return (
    <div className={style.left__sidebar}>
      <div className={style.left__sidebar__panel}>
        <ul className={style.left__sidebar__panel__pages}>
          <Link to="/">
            <li>
              <i class="fa-solid fa-house"></i>
              Home
            </li>
          </Link>
          <Link to="/">
            <li>
              <i class="fa-solid fa-search"></i>
              Search
            </li>
          </Link>
          <Link to="/">
            <li>
              <i class="fa-solid fa-book"></i>
              Library
            </li>
          </Link>
          <br />
          <Link>
            <li>
              <i class="fa-solid fa-square-plus"></i>Create Playlist
            </li>
          </Link>
          <Link to="/liked-songs" className={style.heartButton}>
            <li>
              <i class="fa-solid fa-heart"></i>
              Liked Songs
            </li>
          </Link>
        </ul>
      </div>
      <ul className={style.left__sidebar__tracks}>
        {playlists?.items?.map((playlist) => (
          <Link to={`/playlists/${playlist.id}`}>
            <li>{playlist.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
