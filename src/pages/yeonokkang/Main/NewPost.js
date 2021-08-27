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
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
            <i className="far fa-paper-plane"></i>
          </div>

          <i className="far fa-bookmark"></i>
        </div>
        <div className="liked-num">89 likes</div>
        <div className="uploader-comment">
          <span className="my-id">cat_the_tiger</span>
          <span className="my-write">귀여워 마치 나처럼 🐈</span>
        </div>

        <ul>
          {comments.map(commentData => (
            <li key={commentData.id}>
              <span className="comments-id">{commentData.username}</span>
              <span>{commentData.comment}</span>
            </li>
          ))}
        </ul>
        <div className="upload-time">28 minutes ago </div>

        <NewComment
          inputChanged={this.handleInputText}
          putComment={commentInput}
          addComment={this.setCommentsState}
          keyUp={this.keyUp}
        />
      </article>
    );
  }
}
