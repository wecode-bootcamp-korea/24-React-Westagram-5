import React from 'react';
import './MainKeum.scss';

class MainKeum extends React.Component {
  render() {
    return (
      <>
        <div className="mainwrap">
          {/* feedpart */}
          <div className="main">
            <div className="feeds">
              <div className="article">
                <header className="useId">
                  <img
                    className="my"
                    alt="프로필 이미지"
                    src="../images/bobaekeum/my.jpeg"
                  />
                  <div className="my_name">golden_bb</div>
                </header>
                <div className="feedImg">
                  <img
                    className="pics"
                    alt="피드 이미지"
                    src="../images/bobaekeum/pics.jpeg"
                  />
                </div>

                <div className="feedComent">
                  <div className="icons">
                    <div className="leftIcons">
                      <i className="far fa-heart fa-margin"></i>
                      <i className="far fa-comment fa-margin"></i>
                      <i className="far fa-paper-plane fa-margin"></i>
                    </div>
                    <div className="rightIcons">
                      <i className="far fa-bookmark"></i>
                    </div>
                  </div>
                  <div className="likeMount">
                    <span>좋아요 17개</span>
                  </div>
                  <div className="comments">
                    <div className="my_name">golden_bb</div>
                    <div className="myComment">가을 선정릉</div>
                  </div>
                  <div className="othersComments">
                    <div className="thatgle">
                      <span className="uName">golden_bb</span>
                      <span className="othersComment">안녕</span>
                    </div>
                  </div>
                  <div className="typingArea">
                    <input
                      className="typingText"
                      type="text"
                      placeholder="댓글 달기..."
                    />
                    <button className="post">게시</button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- aside --> */}
            <aside className="main-right">
              <div className="aboutUser">
                <img
                  className="my"
                  alt="프로필 이미지"
                  src="../images/bobaekeum/my.jpeg"
                />
                <div className="mynamelayout">
                  <div className="my_name">golden_bb</div>
                  <div className="myrealname">keum</div>
                </div>
              </div>
              <div className="aboutStory">
                <div className="storyShow">
                  <div className="story">스토리</div>
                  <div className="showAll">모두보기</div>
                </div>
                <div className="realStory">
                  <img
                    className="ur"
                    alt="프로필 이미지"
                    src="../images/bobaekeum/ericnam.jpeg"
                  />
                  <div className="namelayout">
                    <div className="urname">ericnam</div>
                    <div className="uploadingTime">1시간 전</div>
                  </div>
                </div>
                <div className="realStory">
                  <img
                    className="ur"
                    alt="프로필 이미지"
                    src="../images/bobaekeum/dong.jpeg"
                  />
                  <div className="namelayout">
                    <div className="urname">animal_n_human</div>
                    <div className="uploadingTime">8시간 전</div>
                  </div>
                </div>
              </div>

              <div className="aboutRecommend">
                <div className="recommendShow">
                  <div className="recommendForU">회원님을 위한 추천</div>
                  <div className="showAll">모두보기</div>
                </div>
                <div className="recommendation">
                  <img
                    className="ur"
                    alt="프로필 이미지"
                    src="../images/bobaekeum/luna.jpeg"
                  />
                  <div className="namelayout">
                    <div className="urname">luna.human</div>
                    <div className="whoFollowed">somebody님 외 2명...</div>
                  </div>
                  <div className="follow">팔로우</div>
                </div>
                <div className="recommendation">
                  <img
                    className="ur"
                    alt="프로필 이미지"
                    src="../images/bobaekeum/hee.jpeg"
                  />
                  <div className="namelayout">
                    <div className="urname">geurugem</div>
                    <div className="whoFollowed">somebody님 외 2명...</div>
                  </div>
                  <div className="follow">팔로우</div>
                </div>
                <div className="recommendation">
                  <img
                    className="ur"
                    alt="프로필 이미지"
                    src="../images/bobaekeum/bin.jpeg"
                  />
                  <div className="namelayout">
                    <div className="urname">misangin</div>
                    <div className="whoFollowed">somebody님 외 2명...</div>
                  </div>
                  <div className="follow">팔로우</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </>
    );
  }
}

export default MainKeum;
