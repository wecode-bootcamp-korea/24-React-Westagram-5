import React, { Component } from 'react';

export default class NewComment extends Component {
  render() {
    const { inputChanged, putComment, addComment } = this.props;
    return (
      <div>
        <div className="add-comments">
          <span>😊</span>
          <input
            onChange={inputChanged}
            type="text"
            id="comments"
            placeholder="댓글 달기"
            value={putComment}
          />
          <button type="submit" onClick={addComment}>
            Post
          </button>
        </div>
      </div>
    );
  }
}
