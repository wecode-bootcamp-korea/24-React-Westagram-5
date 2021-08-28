import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav-area">
        <div className="nav-max">
          <div className="nav-left">
            <span id="brand-name">Westagram</span>
          </div>
          <div className="nav-middle">
            <i className="fas fa-search">&nbsp;검색</i>
            <input id="search-bar" type="text" />
          </div>

          <div className="nav-right">
            <i className="far fa-paper-plane" />
            <i className="far fa-heart" />
            <i className="far fa-compass" />
            <i className="far fa-user-circle" />
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
