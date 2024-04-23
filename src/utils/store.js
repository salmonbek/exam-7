import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useStore = create((set) => ({
  likedSongs: [],

  addlikedSong: (likedSong) =>
    set((state) => ({ likedSongs: state.likedSongs.push(likedSong) })),
}));

const useLocalStore = create(
  persist(
    (set) => ({
      access_token: "",
      currentPlaylist: [],
      currentAudio: {},
      isPlaying: false,
      likedSongs: [],

      removeLikedSong: (likedSong) =>
        set((state) => {
        
          let rem = state.likedSongs.indexOf((i) => i.id == likedSong.id);
          state.likedSongs.splice(rem, 1)
          // ({ likedSongs: state.likedSongs] })
          return { likedSongs: state.likedSongs };
        }),

      addLikedSong: (likedSong) =>
        set((state) => ({ likedSongs: [...state.likedSongs.push(likedSong)] })),

      setAccessToken: (token) => set({ access_token: token }),
      setCurrentPlaylist: (playlistId) => set({ currentPlaylist: playlistId }),
      setCurrentAudio: (audio) => set({ currentAudio: audio }),
      setIsPlaying: (value) => set({ isPlaying: value }),
    }),
    {
      name: "StateStorage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export { useLocalStore };
export default useStore;
