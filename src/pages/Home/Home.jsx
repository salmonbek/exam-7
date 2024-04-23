import React, { useEffect, useState } from "react";
import GoodAfternoon from "../../components/sections/GoodAfternoon/GoodAfternoon";
import { API_ID, API_SECRET, AccauntURL, BaseURL } from "../../utils/api";
import { useLocalStore } from "../../utils/store";
import Cards from "../../components/sections/Cards/Cards";
import { Logger } from "sass";

export default function Home() {
  const [playlists, setPlaylists] = useState([]);
  const { access_token } = useLocalStore((s) => s);

  useEffect(() => {
    // fetch(BaseURL + "/browse/new-releases?limit=10&offer=5", {
    //   method: "GET",
    //   headers: {
    //     Authorization: `Bearer ${access_token}`,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((d) => console.log(d));

    fetch(BaseURL + "/browse/featured-playlists?limit=20&offer=5", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => res.json())
      .then((d) => setPlaylists(d.playlists));

    // fetch(BaseURL + "/playlists/37i9dQZF1DWWY64wDtewQt/tracks?limit=10&offer=5", {
    //   method: "GET",
    //   headers: {
    //     Authorization: `Bearer ${access_token}`,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((d) => console.log(d));
  }, []);

  console.log(playlists);

  return (
    <div>
      <div>
        <GoodAfternoon playlists={playlists?.items?.slice(0, 8)} />
        <br />
        <br />
        <Cards data={playlists?.items} />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
