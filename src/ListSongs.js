import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import RaagaShelf from "./RaagaShelf";

/**
 * @description Represents the "/" page.
 * @constructor
 */
class ListSongs extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }))
  }
  clearQuery = () => {
    this.updateQuery('')
  }

  render() {
    const { query } = this.state;
    const { album } = this.props;
    const showingAlbum = query.trim() === ''
    ? album
    : album.filter((s) => (
      s.raagam.toLowerCase().includes(query.toLowerCase())
    ))

    //return JSX
    return (
      <div>
        <div className="search-songs">
          <div className="search-songs-bar">
              <div className="search-songs-input-wrapper">
              <input type="text" placeholder="Search by Raaga name" value={query} onChange={event => this.updateQuery(event.target.value)}/>
              </div>
              {showingAlbum.length !== album.length && (
                <div className='showing-album'>
                  <button onClick={this.clearQuery}>Show all</button>
                </div>
              )}
          </div>
          <div className="search-songs-results">
              <ol className="songs-grid">
              </ol>
          </div>
        </div>
      <div className="list-songs">
        <div className="list-songs-title">
          <h1>Ramesh's Raaga Catalog</h1>
        </div>
        <div className="list-songs-content">
          <div>
              {showingAlbum.map(raagaShelf => (
                <RaagaShelf
                  key={raagaShelf.raagam}
                  songs={raagaShelf.songs}
                  shelfTitle={raagaShelf.raagam}
                />
              ))}
          </div>
        </div>
        <div className="open-search">
          <Link
          to="/search">Add a song</Link>
        </div>
      </div>
      </div>
    );
  }
}


ListSongs.propTypes = {
  album: PropTypes.array.isRequired,
};


export default ListSongs;
