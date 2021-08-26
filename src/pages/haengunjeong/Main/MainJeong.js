import React from 'react';
import './MainJeong.scss';

class MainJeong extends React.Component {
  render() {
    return (
      <>
        <nav className="nav">
          <div>
            <img
              alt="instacamera"
              className="instacamera"
              src="images/haengunjeong/instagram.png"
            />
            <span className="logo">we:stagram</span>
            <input type="text" className="search" placeholder="검색" />
            <img
              alt="explore"
              className="explore"
              src="images/haengunjeong/explore.png"
            />
            <img className="heart" src="images/haengunjeong/heart.png" />
            <img className="profile" src="images/haengunjeong/profile.png" />
          </div>
        </nav>

        <main className="mainContainer">
          <article>
            <section className="feed">
              <div className="feedheader">
                <img
                  className="profileImg"
                  src="images/haengunjeong/user1.jpg"
                />
                <p>insta_account</p>
              </div>
              <img className="feedImg" src="images/haengunjeong/feed.jpg" />
              <div className="commentWrapper">
                <div className="commentIconWrapper">
                  <div>
                    <img
                      className="hearted"
                      src="images/haengunjeong/hearted.png"
                    />
                    <img
                      className="comment"
                      d
                      src="images/haengunjeong/comment.png"
                    />
                    <img
                      className="upload"
                      src="images/haengunjeong/upload.png"
                    />
                  </div>
                  <i className="far fa-bookmark"></i>
                </div>

                <div className="commentLike">
                  <img
                    className="likeUser"
                    src="images/haengunjeong/user2.jpg"
                  />
                  <p>
                    <span className="name">insta_name</span>님 외 10명이
                    좋아합니다
                  </p>
                </div>

                <ul id="commentLists">
                  <li>
                    <span className="name">insta_id</span>
                    <span>댓글이댜아</span>
                  </li>
                </ul>
              </div>

              <div className="comment">
                <input
                  id="commentInput"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button id="submit">게시</button>
              </div>
            </section>
          </article>

          <aside>
            <section className="sectionWraper">
              <i className="far fa-user-circle"></i>
              <div className="sectionInner">
                <p>wecode_bootcamp</p>
                <p>Wecode | 위코드</p>
              </div>
            </section>

            <div className="contentWrapper">
              <div className="contentHeader">
                <p>스토리</p>
                <p>모두 보기</p>
              </div>
            </div>
          </aside>
        </main>
      </>
    );
  }
}

export default MainJeong;
