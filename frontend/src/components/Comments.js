import React from 'react';
import { Comment } from './Comment';

export const Comments = ({ comments, className, max, user }) => {
  const hasComments = comments.length >= 1;
  let amount = hasComments
    ? comments.length - 1 >= max
      ? max
      : comments.length - 1
    : 0;
  return (
    <div className={`comments__comments ${className || ''}`}>
      {hasComments
        ? comments
            .slice(0, amount)
            .map((comment, i) => (
              <Comment
                className={`${
                  user.id === comment?.user?.id ? 'user-comment' : ''
                }`}
                comment={comment}
                key={i}
              />
            ))
        : 'no comments'}
    </div>
  );
};
