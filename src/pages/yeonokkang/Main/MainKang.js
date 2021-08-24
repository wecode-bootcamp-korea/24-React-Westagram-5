import React from 'react';
import './MainKang.scss';
import Nav from '../../../components/Nav/Nav';

class MainKang extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="entire-area">
          <main>
            <div className="feeds">
              <div className="stories">
                <div>
                  <img src="/images/yeonokkang/user.jpeg" alt="story_1" />
                  <span>hello_there</span>
                </div>
                <div>
                  <img src="/images/yeonokkang/user.jpeg" alt="story_2" />
                  <span>82_people</span>
                </div>
                <div>
                  <img src="/images/yeonokkang/user.jpeg" alt="story_3" />
                  <span>king_tiger</span>
                </div>
                <div>
                  <img src="/images/yeonokkang/user.jpeg" alt="story_4" />
                  <span>riverlight_ok</span>
                </div>
                <div>
                  <img src="/images/yeonokkang/user.jpeg" alt="story_5" />
                  <span>cherry_cat</span>
                </div>
              </div>
              <article>
                <div className="uploader-header">
                  <img alt="uploader-profile" src="/images/yeonokkang/T1.jpg" />
                  <span>cat_the_tiger</span>
                </div>
                <div>
                  <img
                    alt="uploaded-pic"
                    src="/images/yeonokkang/D1.jpeg"
                    className="upload-img"
                  />
                </div>
                <div className="social-activity">
                  <div className="activity">
                    <div>
                      <i className="far fa-heart"></i>
                      <i className="far fa-comment"></i>
                      <i className="far fa-paper-plane"></i>
                    </div>

                    <i className="far fa-bookmark"></i>
                  </div>
                  <div className="liked-num">89 likes</div>
                  <div className="uploader">
                    <span className="my-id">cat_the_tiger</span>
                    <span className="my-write">귀여워 마치 나처럼 🐈</span>
                  </div>

                  <ul>
                    <li>
                      <span className="comments-id">k_rural_dog</span>
                      <span>cooooooooooooool</span>
                    </li>
                  </ul>
                </div>
                <div className="upload-time">28 minutes ago </div>
                <div className="add-comments">
                  <span>😊</span>
                  <input type="text" id="comments" placeholder="댓글 달기" />
                  <button>Post</button>
                </div>
              </article>
            </div>

            <div className="aside">
              <div className="user-id">
                <img alt="uploader-profile" src="/images/yeonokkang/T1.jpg" />
                <span>cat_the_tiger</span>
              </div>
              <div className="recommend-header">
                <span>회원님을 위한 추천</span>
              </div>
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
          </main>
        </div>
      </>
    );
  }
}

export default MainKang;
