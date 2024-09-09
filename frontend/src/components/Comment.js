import React, { useState } from 'react';
import dislikeEmpty from '../images/dislike-empty.svg';
import dislikeFilled from '../images/dislike-filled.svg';
import iconDot from '../images/dot.svg';
import likeEmpty from '../images/like-empty.svg';
import likeFilled from '../images/like-filled.svg';
import { verifiedIcon } from '../utils/icons';
import { formatNumber } from '../utils/functions';
import moment from 'moment';

export const Comment = ({ className, comment, key }) => {
  const [isLiked, setIsLiked] = useState(comment.liked || false);
  const [isDisLiked, setIsDisLiked] = useState(comment.disliked || false);
  const [currentDislikes, setCurrentDislikes] = useState(
    comment.dislikes || []
  );
  const [currentLikes, setcurrentLikes] = useState(comment.likes || []);

  const handleLike = () => {
    setIsDisLiked(false);
    setIsLiked(!isLiked);
    setcurrentLikes(currentLikes + 1);
  };

  const handleDislike = () => {
    setIsLiked(false);
    setIsDisLiked(!isLiked);
    setCurrentDislikes(currentDislikes + 1);
  };

  const dotIcon = <img alt='dot' className='dot' src={iconDot} />;
  return (
    <div className={`comments__comment --mb-half ${className || ''}`} key={key}>
      <div className='comments__comment-left'>
        <div className='comments__icon'>
          <img alt={`img`} src={comment?.user?.img} />
        </div>
        <div className='comments__title'>
          <div className='comments__title-left'>
            <div className='comments__title-center'>
              <p>
                <span className='--bold'>{comment?.user?.username}</span>
                {comment?.user?.isVerified && (
                  <span className='user-verified'>{verifiedIcon}</span>
                )}
                <span className='--ml-half'>{comment?.comment} </span>
              </p>
              <span className='post-time'>
                <div className=''>{moment(comment.date).fromNow()}</div>
                {dotIcon}
                <div className=''>{`${formatNumber(currentLikes)} likes`} </div>
                {dotIcon}
                <div>{`${formatNumber(currentDislikes)} dislikes`} </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='comments__like-option'>
        {' '}
        <span
          className='--row --align-items-center'
          onClick={() => handleLike()}
          onKeyDown={() => handleLike()}
        >
          <img alt='dislike' src={isLiked ? likeFilled : likeEmpty} />
        </span>
        <span
          className='--row --align-items-center --ml-half'
          onClick={() => handleDislike()}
          onKeyDown={() => handleDislike()}
        >
          <img alt='dislike' src={isDisLiked ? dislikeFilled : dislikeEmpty} />
        </span>
      </div>
    </div>
  );
};
