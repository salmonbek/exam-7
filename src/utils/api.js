const API_ID = "07789aee377442c8b1f4e6190eeb192f";
const API_SECRET = "99b2e6b304e34329ba1d8ae6f0a1f8d8";

const BaseURL = "https://api.spotify.com/v1";
const AccauntURL = "https://accounts.spotify.com/api";

async function AddSongToLikedSongs(access_token, id) {
  const res = await fetch(`https://api.spotify.com/v1/me/tracks`, {
    method: "PUT",
    body: JSON.stringify([id]),
    // body: `ids=${id}`,
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return data;
}

export { API_ID, API_SECRET, AccauntURL, BaseURL, AddSongToLikedSongs };
