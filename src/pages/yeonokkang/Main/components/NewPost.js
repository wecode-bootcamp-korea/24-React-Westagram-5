import React, { Component } from 'react';
import NewComment from './NewComment';

export default class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      commentInput: '',
    };
  }

  setCommentsState = () => {
    const { comments, commentInput } = this.state;
    const history = {
      id: comments.length + 1,
      username: 'yeonok',
      comment: commentInput,
    };

    this.setState({
      comments: [...comments, history],
      commentInput: '',
    });
  };

  keyUp = e => {
    const { comments, commentInput } = this.state;
    if (e.keyCode === 13) {
      const history = {
        id: comments.length + 1,
        username: 'yeonok',
        comment: commentInput,
      };

      this.setState({
        comments: [...comments, history],
        commentInput: '',
      });
    }
  };

  handleInputText = e => {
    this.setState({
      commentInput: e.target.value,
    });
  };

  render() {
    const { handleInputText, setCommentsState, keyUp } = this;
    const { commentInput, comments } = this.state;

    return (
      <article>
        <div className="uploader-header">
          <img
            className="uploader-profile"
            alt="uploader-profile"
            src="/images/yeonokkang/T1.jpg"
          />
          <span>cat_the_tiger</span>
        </div>
        <img
          className="upload-img"
          alt="uploaded-pic"
          src="/images/yeonokkang/D1.jpeg"
        />
        <div className="activity">
          <div>
            <i className="far fa-heart" />
            <i className="far fa-comment" />
            <i className="far fa-paper-plane" />
          </div>

          <i className="far fa-bookmark" />
        </div>
        <div className="liked-num">89 likes</div>
        <div className="uploader-comment">
          <span className="my-id">cat_the_tiger</span>
          <span className="my-write">귀여워 마치 나처럼 🐈</span>
        </div>

        <ul>
          {comments.map(({ id, username, comment }) => (
            <li key={id}>
              <span className="comments-id">{username}</span>
              <span>{comment}</span>
            </li>
          ))}
        </ul>
        <div className="upload-time">28 minutes ago </div>

        <NewComment
          inputChanged={handleInputText}
          putComment={commentInput}
          addComment={setCommentsState}
          keyUp={keyUp}
        />
      </article>
    );
  }
}
