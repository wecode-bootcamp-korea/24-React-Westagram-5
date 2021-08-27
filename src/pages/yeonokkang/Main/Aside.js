import React from 'react';

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
            <div className="other-user">
              <img alt="k-dog" src="/images/yeonokkang/user.jpeg" />
              <span>k_rural_dog</span>
              <button>follow</button>
            </div>
            <div className="other-user">
              <img alt="k-dog" src="/images/yeonokkang/user.jpeg" />
              <span>k_rural_dog</span>
              <button>follow</button>
            </div>
            <div className="other-user">
              <img alt="k-dog" src="/images/yeonokkang/user.jpeg" />
              <span>k_rural_dog</span>
              <button>follow</button>
            </div>
            <div className="other-user">
              <img alt="k-dog" src="/images/yeonokkang/user.jpeg" />
              <span>k_rural_dog</span>
              <button>follow</button>
            </div>
            <div className="other-user">
              <img alt="k-dog" src="/images/yeonokkang/user.jpeg" />
              <span>k_rural_dog</span>
              <button>follow</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
