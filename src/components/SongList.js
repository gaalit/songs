import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    // mapStateToProps equivalent to this.props === {songs: state.songs}
    return <div>SongList</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
