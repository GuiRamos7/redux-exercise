import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ mySelectedSong }) => {
  return (
    <div>
      {mySelectedSong ? (
        <div>
          <p>Title: {mySelectedSong.title}</p>
          <p>Duration: {mySelectedSong.duration}</p>
        </div>
      ) : (
        <p>Select a song</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { mySelectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
