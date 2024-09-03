import React from 'react';
import dislikeEmpty from '../images/dislike-empty.svg';
import dislikeFilled from '../images/dislike-filled.svg';
import iconDot from '../images/dot.svg';
import likeEmpty from '../images/like-empty.svg';
import likeFilled from '../images/like-filled.svg';
import { verifiedIcon } from '../utils/icons';
import { formatNumber } from '../utils/functions';

export const Comments = ({ comments, className }) => {
  const dotIcon = <img alt='dot' className='dot' src={iconDot} />;
  return (
    <div className={`comments__comments ${className || ''}`}>
      {comments.map((comment, i) => (
        <div className='comments__comment --mb-half' key={i}>
          <div className='comments__comment-left'>
            <div className='comments__icon'>
              <img alt={`img`} src={comment?.user?.img} />
            </div>
            <div className='comments__title'>
              <div className='comments__title-left'>
                <div className='comments__title-center'>
                  <p>
                    <span className='--bold --mr-half'>
                      {comment?.user?.username}
                    </span>
                    {comment?.user?.isVerified && (
                      <span className='user-verified'>{verifiedIcon}</span>
                    )}
                    {comment?.comment}{' '}
                  </p>
                  <span className='post-time'>
                    <span className=''>3d</span>
                    {dotIcon}
                    <span className=''>
                      {formatNumber(comment.likes)} likes
                    </span>
                    {dotIcon}
                    {formatNumber(comment.dislikes)} dislikes
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='comments__like-option'>
            {' '}
            <span
              className='--row --align-items-center'
              //onClick={() => handleLike()}
              //onKeyDown={() => handleLike()}
            >
              <img
                alt='dislike'
                src={comment.isLiked ? likeFilled : likeEmpty}
              />
            </span>
            <span
              className='--row --align-items-center --ml-half'
              //onClick={() => handleDislike()}
              //onKeyDown={() => handleDislike()}
            >
              <img
                alt='dislike'
                src={comment.isDisLiked ? dislikeFilled : dislikeEmpty}
              />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
