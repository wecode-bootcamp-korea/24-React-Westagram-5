import React from 'react';
import './MainKang.scss';
import Nav from '../../../components/Nav/Nav';
import Feeds from './components/Feeds';
import Aside from './components/Aside';

class MainKang extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="entire-area">
          <main>
            <Feeds />
            <Aside />
          </main>
        </div>
      </>
    );
  }
}

export default MainKang;
