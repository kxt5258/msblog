import React from 'react';

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;
    if (comment.status === 'approved') {
      content = comment.content;
    } else if (comment.status === 'pending') {
      content = 'pending comment';
    } else if (comment.status === 'rejected') {
      content = 'Rejected comment';
    }
    return <li key={comment.id}>{content}</li>;
  });

  return <ol>{renderedComments}</ol>;
};

export default CommentList;
