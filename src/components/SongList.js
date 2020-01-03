import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList = () => {
    const { songs, selectSong } = this.props;

    return songs?.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// const SongList = () => {
//   return <div></div>;
// };

const mapStateToProps = state => {
  console.log(state);
  const { songs } = state;
  return { songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
