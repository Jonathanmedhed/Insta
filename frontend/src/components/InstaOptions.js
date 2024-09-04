import React from 'react';
import likeEmpty from '../images/like-empty.svg';
import likeFilled from '../images/like-filled.svg';
import saveIcon from '../images/tag.svg';
import saveFilledIcon from '../images/tag-filled.svg';
import shareIcon from '../images/share.svg';
import commentIcon from '../images/comment.svg';
import dislikeEmpty from '../images/dislike-empty.svg';
import dislikeFilled from '../images/dislike-filled.svg';
import { formatNumber } from '../utils/functions';

export const InstaOptions = ({
  className,
  handleLike,
  handleDislike,
  isDisLiked,
  isLiked,
  dislikes,
  likes,
  setShowComments,
  showComments,
  setSaved,
  saved,
  isCommentSection,
}) => {
  return (
    <div className={`post__options ${className || ''}`}>
      <div className='post__options-left --row'>
        <span
          className='--row --align-items-center'
          onClick={() => handleLike()}
          onKeyDown={() => handleLike()}
        >
          <img alt='dislike' src={isLiked ? likeFilled : likeEmpty} />
          <span className='post__amounts'>{formatNumber(likes)}</span>
        </span>
        <span
          className='--row --align-items-center --ml-half'
          onClick={() => handleDislike()}
          onKeyDown={() => handleDislike()}
        >
          <img alt='dislike' src={isDisLiked ? dislikeFilled : dislikeEmpty} />
          <span className='post__amounts'>{formatNumber(dislikes)}</span>
        </span>
        {!isCommentSection && (
          <span className=' --ml-qter' onClick={() => console.log('')}>
            <img alt='share' src={shareIcon} />
          </span>
        )}
      </div>
      <div className='post__options-right'>
        {isCommentSection && (
          <span
            className=' --ml-qter'
            onClick={() => setShowComments(!showComments)}
          >
            <img alt='comment' src={commentIcon} />
          </span>
        )}
        {isCommentSection && (
          <span className=' --ml-qter' onClick={() => console.log('')}>
            <img alt='share' src={shareIcon} />
          </span>
        )}
        <span className=' --ml-qter' onClick={() => setSaved(!saved)}>
          <img alt='save' src={saved ? saveFilledIcon : saveIcon} />
        </span>
      </div>
    </div>
  );
};
