import React, { useState } from 'react';
import { Video } from './Video';
import ImageComponent from './ImageComponent';
import dislikeEmpty from '../images/dislike-empty.svg';
import dislikeFilled from '../images/dislike-filled.svg';
import likeEmpty from '../images/like-empty.svg';
import likeFilled from '../images/like-filled.svg';
import iconDot from '../images/dot.svg';
import iconExample from '../images/prog-bg-sm.jpg';
import Input from './Input';
import saveIcon from '../images/tag.svg';
import shareIcon from '../images/share.svg';
import { formatNumber, formatNumberFull } from '../utils/functions';
import { menuIcon } from '../utils/icons';
import { verifiedIcon } from '../utils/icons';
import { Comments } from './Comments';

export const CommentSection = ({
  comments,
  dislikes,
  disliked,
  liked,
  likes,
  media,
  type,
}) => {
  const [isLiked, setIsLiked] = useState(liked || false);
  const [isDisLiked, setIsDisLiked] = useState(disliked || false);
  const [comment, setComment] = useState('');
  /**
  const [likesAmount, setLikesAmount] = useState(likes || []);
  const [dislikesAmount, setDislikesAmount] = useState(dislikes || []);
   */

  const handleLike = () => {
    setIsDisLiked(false);
    setIsLiked(!isLiked);
  };

  const handleDislike = () => {
    setIsLiked(false);
    setIsDisLiked(!isLiked);
  };

  const dotIcon = <img alt='dot' className='dot' src={iconDot} />;

  return (
    <div className='comments'>
      <div className='comments__content'>
        <div className='comments__media'>
          {type === 'video' ? (
            <Video
              controls={false}
              autoplay={false}
              muted={false}
              src={media.src}
            />
          ) : (
            type === 'img' && (
              <ImageComponent
                alt={media.alt}
                //className={true}
                //key={true}
                //onClick={true}
                //onLoad={true}
                src={media.src}
              />
            )
          )}
        </div>
        <div className='comments__options'>
          <div className='comments__header'>
            <div className='comments__header-left'>
              <div className='comments__icon'>
                <img alt={`img`} src={iconExample} />
              </div>
              <div className='comments__title'>
                <div className='comments__title-left'>
                  <div className='comments__title-top'>
                    <h3>accounttitle </h3>
                    <span className='user-verified'>{verifiedIcon}</span>
                  </div>
                  <div className='comments__description'>
                    <p className='--bold --mt-qter'>
                      This is a description about the vid
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='comments__header-right'>{menuIcon}</div>
          </div>
          <div className='comments__options-left'>
            <Comments comments={comments} />
          </div>
          <div className='comments__option-row'>
            <span>
              <span
                className=''
                onClick={() => handleLike()}
                onKeyDown={() => handleLike()}
              >
                <img alt='dislike' src={isLiked ? likeFilled : likeEmpty} />
              </span>
              <span
                className=' --ml-half'
                onClick={() => handleDislike()}
                onKeyDown={() => handleDislike()}
              >
                <img
                  alt='dislike'
                  src={isDisLiked ? dislikeFilled : dislikeEmpty}
                />
              </span>
              <span
                className=' --ml-half'
                onClick={() => handleDislike()}
                onKeyDown={() => handleDislike()}
              >
                <img alt='share' src={shareIcon} />
              </span>
            </span>
            <span
              className=' --ml-half'
              onClick={() => handleDislike()}
              onKeyDown={() => handleDislike()}
            >
              <img alt='save' src={saveIcon} />
            </span>
          </div>
          <div className='comments__post-info'>
            <span className='post__amounts --bold'>
              <span className='post__amount'>{formatNumberFull(likes)}</span>{' '}
              likes
            </span>
            <span className='post__amounts --bold'>
              <span className='post__amount'>{formatNumberFull(dislikes)}</span>{' '}
              dislikes
            </span>
            <span className='post-time'>3d ago</span>
          </div>

          <Input
            className='comments__comment'
            type='emoji'
            placeholder='Add a comment...'
            value={comment}
            onChange={setComment}
          />
          <span className={`comments__post ${comment ? '--active' : ''}`}>
            Post
          </span>
        </div>
      </div>
    </div>
  );
};
