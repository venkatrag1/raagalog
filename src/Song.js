import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * @description Component representing a single Song.
 * @constructor
 */
class Song extends Component {

  render() {
    const { song } = this.props;

    return (
      <li>
      <div className="song">
          <div className="song-title">{song.title}</div>
          <div className="song-authors">{song.composers}</div>
      </div>
      </li>
    );
  }
}

Song.propTypes = {
  song: PropTypes.object.isRequired,
};

export default Song;
