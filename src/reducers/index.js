import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Lá vem a morte", duration: "4:05" },
    { title: "Come As You Are", duration: "3:45" },
    { title: "Smells Like Teen Spirit", duration: "4:39" }
  ];
};

const selectedSongsReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case "SONG_SELECTED":
      return action.payload;
    default:
      return selectedSong;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongsReducer
});
