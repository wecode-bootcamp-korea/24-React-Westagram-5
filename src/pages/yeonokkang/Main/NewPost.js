import React, { Component } from 'react';
import NewComment from './NewComment';

export default class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          id: 1,
          username: '',
          comment: '',
        },
      ],
      commentInput: '',
    };
  }

  setCommentsState = e => {
    const { comments, commentInput } = this.state;
    const history = {
      id: comments.length + 1,
      username: 'yeonok',
      comment: commentInput,
    };

    this.setState({
      comments: [history],
    });
  };

  handleAddComment = () => {
    this.state.comments.map(e => (
      <li>
        <span className="comments-id">{e.username}</span>
        <span>{e.comment}</span>
      </li>
    ));
  };

  handleInputText = e => {
    this.setState({
      commentInput: e.target.value,
    });
  };

  render() {
    const { commentInput } = this.state;
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
          {this.state.comments.map(e => (
            <li>
              <span className="comments-id">{e.username}</span>
              <span>{e.comment}</span>
            </li>
          ))}
        </ul>
        <div className="upload-time">28 minutes ago </div>

        <NewComment
          inputChanged={this.handleInputText}
          resetInput={this.resetInput}
          putComment={commentInput}
          addComment={this.setCommentsState}
        />
      </article>
    );
  }
}
