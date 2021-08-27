import React from 'react';
import NewPost from './NewPost';
import Stories from './Stories';

export default class Feeds extends React.Component {
  render() {
    return (
      <div>
        <div className="feeds">
          <div className="stories">
            <Stories />
          </div>
          <NewPost />
        </div>
      </div>
    );
  }
}
