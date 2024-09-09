import React, { useState } from 'react';
import { Video } from './Video';
import Input from './Input';
import ImageComponent from './ImageComponent';
import { formatNumberFull, idGenerator } from '../utils/functions';
import { Comments } from './Comments';
import { InstaHeader } from './InstaHeader';
import { Overlay } from './Overlay';
import { InstaOptions } from './InstaOptions';
import moment from 'moment';

export const CommentSection = ({
  comments,
  date,
  dislikes,
  disliked,
  liked,
  likes,
  isFollowed,
  isReported,
  setIsReported,
  isSaved,
  post,
  user,
  hide,
}) => {
  const [isLiked, setIsLiked] = useState(liked || false);
  const [isDisLiked, setIsDisLiked] = useState(disliked || false);
  const [comment, setComment] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [followed, setFollowed] = useState(isFollowed || false);
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
      className: isReported ? '--color-blue' : '--color-danger',
      label: isReported ? 'Undo report' : 'Report',
      onClick: () => {
        setIsReported(!isReported);
        setShowOptions(false);
        hide();
      },
    },
    {
      className: followed ? '--color-danger' : '',
      label: followed ? 'Unfollow' : 'Follow',
      onClick: () => {
        setFollowed(!followed);
        setShowOptions(false);
      },
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
    const date = new Date();
    const commentToAdd = {
      id: idGenerator(),
      date: date,
      comment: comment,
      disliked: false,
      dislikes: 0,
      liked: false,
      likes: 0,
      user: user,
    };
    setCurrentComments(currentComments.concat(commentToAdd));
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
          {post?.type === 'video' ? (
            <Video
              controls={false}
              autoplay={false}
              muted={false}
              src={post.media}
            />
          ) : (
            <ImageComponent
              //className={true}
              //key={true}
              //onClick={true}
              //onLoad={true}
              src={post?.media}
            />
          )}
        </div>
        <div className='comments__options'>
          <InstaHeader
            className='comment-section'
            date={post.date}
            isFollowed={followed}
            setShowOptions={setShowOptions}
            setIsFollowed={setFollowed}
            showOptions={showOptions}
            post={post}
          />
          <div className='comments__options-left'>
            <Comments
              className='comment-section'
              comments={currentComments.sort((b, a) => a.date - b.date)}
              user={user}
            />
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
