import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/layout/layout";
import "./index.scss";
import Playlist from "./pages/Playlist/Playlist";
import LikedSongs from "./pages/LikedSongs/LikedSongs";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlists/:playlistID" element={<Playlist />} />
        <Route path="/liked-songs" element={<LikedSongs />} />
      </Routes>
    </Layout>
  );
};

export default App;
