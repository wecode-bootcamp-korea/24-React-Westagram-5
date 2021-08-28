import React from 'react';
import Suggestions from './Suggestions';

export default class Aside extends React.Component {
  render() {
    return (
      <div className="aside">
        <div className="user-id">
          <img alt="uploader-profile" src="/images/yeonokkang/T1.jpg" />
          <span>cat_the_tiger</span>
        </div>
        <div className="recommend-header">
          <span>회원님을 위한 추천</span>
          <div className="follow-others">
            <Suggestions />
            <Suggestions />
            <Suggestions />
            <Suggestions />
          </div>
        </div>
      </div>
    );
  }
}
