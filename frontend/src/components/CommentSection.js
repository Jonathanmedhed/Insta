import React, { useState } from 'react';
import { Video } from './Video';
import Input from './Input';
import ImageComponent from './ImageComponent';
import { formatNumberFull } from '../utils/functions';
import { Comments } from './Comments';
import { InstaHeader } from './InstaHeader';
import { Overlay } from './Overlay';
import { InstaOptions } from './InstaOptions';
import imgExample from '../images/example-post.webp';
import moment from 'moment';

export const CommentSection = ({
  comments,
  date,
  dislikes,
  disliked,
  liked,
  likes,
  media,
  type,
  isFollowed,
  isReported,
  isSaved,
}) => {
  const [isLiked, setIsLiked] = useState(liked || false);
  const [isDisLiked, setIsDisLiked] = useState(disliked || false);
  const [comment, setComment] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [followed, setFollowed] = useState(isFollowed || false);
  const [reported, setReported] = useState(isReported || false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [currentComments, setCurrentComments] = useState(comments || []);
  const [currentDislikes, setCurrentDislikes] = useState(dislikes || []);
  const [currentLikes, setcurrentLikes] = useState(likes || []);
  const [saved, setSaved] = useState(isSaved || false);
  /**
  const [likesAmount, setLikesAmount] = useState(likes || []);
  const [dislikesAmount, setDislikesAmount] = useState(dislikes || []);
   */

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

  const menuOptions = [
    {
      className: reported ? '--color-success' : '--color-danger',
      label: reported ? 'Reported' : 'Report',
      onClick: () => setReported(!reported),
    },
    {
      className: followed ? '--color-danger' : '',
      label: followed ? 'Unfollow' : 'Follow',
      onClick: () => setFollowed(!followed),
    },
    {
      className: isLinkCopied ? '--color-success' : '',
      label: isLinkCopied ? 'Copied!' : 'Copy link',
      onClick: () => {
        navigator.clipboard.writeText('copied link');
        setIsLinkCopied(true);
      },
    },
    {
      label: 'Cancel',
      onClick: () => setShowOptions(false),
    },
  ];

  const handleAddComment = () => {
    comment &&
      setCurrentComments(
        currentComments.concat({
          id: 'id21ed',
          comment: comment,
          user: {
            img: imgExample,
            username: 'user123456',
          },
        })
      );
    setComment('');
  };

  return (
    <div className='comments'>
      <Overlay hide={() => setShowOptions(false)} show={showOptions}>
        <div className='menu-overlay'>
          <div className='menu-overlay__options'>
            {menuOptions.map((option, i) => (
              <div
                className={`menu-overlay__option ${
                  option.className ? option.className : ''
                }`}
                key={i}
                onClick={option.onClick}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      </Overlay>
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
          <InstaHeader
            className='comment-section'
            date={date}
            setShowOptions={setShowOptions}
            showOptions={showOptions}
          />
          <div className='comments__options-left'>
            <Comments className='comment-section' comments={currentComments} />
          </div>

          <div className='comments__post-info comment-section'>
            <InstaOptions
              className='comment-section'
              handleDislike={handleDislike}
              handleLike={handleLike}
              isDisLiked={isDisLiked}
              isLiked={isLiked}
              dislikes={currentDislikes}
              likes={currentLikes}
              setSaved={setSaved}
              saved={saved}
            />
            <span className='post__amounts --bold'>
              <span className='post__amount'>
                {formatNumberFull(currentLikes)}
              </span>{' '}
              likes
            </span>
            <span className='post__amounts --bold'>
              <span className='post__amount'>
                {formatNumberFull(currentDislikes)}
              </span>{' '}
              dislikes
            </span>
            <span className='post-time'>{moment(date).fromNow()}</span>
            <Input
              className='comments__input'
              type='emoji'
              placeholder='Add a comment...'
              value={comment}
              onChange={setComment}
              onEnter={handleAddComment}
            />
            <span
              className={`comments__post ${comment ? '--active' : ''}`}
              onClick={handleAddComment}
            >
              Post
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
