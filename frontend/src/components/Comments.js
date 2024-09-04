import React from 'react';
import { Comment } from './Comment';

export const Comments = ({ comments, className }) => {
  return (
    <div className={`comments__comments ${className || ''}`}>
      {comments.map((comment, i) => (
        <Comment comment={comment} key={i} />
      ))}
    </div>
  );
};
