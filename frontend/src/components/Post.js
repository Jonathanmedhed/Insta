import React, { useState } from 'react';
import { CommentSection } from './CommentSection';
import Input from './Input';
import { Overlay } from './Overlay';
import { Video } from './Video';
import ImageComponent from './ImageComponent';
import commentIcon from '../images/comment.svg';
import dislikeEmpty from '../images/dislike-empty.svg';
import dislikeFilled from '../images/dislike-filled.svg';
import imgExample from '../images/example-post.webp';
import likeEmpty from '../images/like-empty.svg';
import likeFilled from '../images/like-filled.svg';
import iconExample from '../images/prog-bg-sm.jpg';
import saveIcon from '../images/tag.svg';
import saveFilledIcon from '../images/tag-filled.svg';
import shareIcon from '../images/share.svg';
import { formatNumber } from '../utils/functions';
import { menuIcon } from '../utils/icons';
import { verifiedIcon } from '../utils/icons';
import { Comments } from './Comments';

export const Post = ({
  comments,
  dislikes,
  disliked,
  isFollowed,
  isReported,
  isSaved,
  liked,
  likes,
  media,
  type,
}) => {
  const [comment, setComment] = useState('');
  const [currentComments, setCurrentComments] = useState(comments || []);
  const [currentDislikes, setcurrentDislikes] = useState(dislikes || []);
  const [currentLikes, setcurrentLikes] = useState(dislikes || []);
  const [followed, setFollowed] = useState(isFollowed || false);
  const [isLiked, setIsLiked] = useState(liked || false);
  const [isDisLiked, setIsDisLiked] = useState(disliked || false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [reported, setReported] = useState(isReported || false);
  const [saved, setSaved] = useState(isSaved || false);
  const [showComments, setShowComments] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
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

  return (
    <div className='post'>
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
      <Overlay hide={() => setShowComments(false)} show={showComments}>
        <CommentSection
          comments={currentComments}
          dislikes={currentDislikes}
          disliked={isDisLiked}
          isFollowed={followed}
          isReported={reported}
          liked={liked}
          likes={currentLikes}
          media={media}
          type={type}
        />
      </Overlay>
      <div className='post__header'>
        <div className='post__header-left'>
          <div className='post__icon'>
            <img alt={`img`} src={iconExample} />
          </div>
          <div className='post__title'>
            <div className='post__title-left'>
              <div className='post__title-top'>
                <h3>accounttitle </h3>
                <span className='user-verified'>{verifiedIcon}</span>
                <span className='--ml-qter'>•</span>{' '}
                <span className='post-time --ml-qter'>3d</span>
              </div>
              <span>sub title</span>
            </div>
          </div>
        </div>
        <div
          className='post__header-right'
          onClick={() => setShowOptions(!showOptions)}
        >
          {menuIcon}
        </div>
      </div>
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
      <div className='post__options'>
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
            <img
              alt='dislike'
              src={isDisLiked ? dislikeFilled : dislikeEmpty}
            />
            <span className='post__amounts'>{formatNumber(dislikes)}</span>
          </span>
        </div>
        <div className='post__options-right'>
          <span
            className=' --ml-qter'
            onClick={() => setShowComments(!showComments)}
          >
            <img alt='comment' src={commentIcon} />
          </span>
          <span className=' --ml-qter' onClick={() => console.log('')}>
            <img alt='share' src={shareIcon} />
          </span>
          <span className=' --ml-qter' onClick={() => setSaved(!saved)}>
            <img alt='save' src={saved ? saveFilledIcon : saveIcon} />
          </span>
        </div>
      </div>
      <div className='post__description'>
        <p className='--bold --mt-qter'>This is a description about the vid</p>
      </div>
      <span
        className='--pointer --mt-qter'
        onClick={() => setShowComments(!showComments)}
      >
        View all comments
      </span>
      <Comments className='--mt-1' comments={currentComments} />
      <Input
        className='post__comment'
        type='emoji'
        placeholder='Add a comment...'
        value={comment}
        onChange={setComment}
        onEnter={() => {
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
          console.log(
            currentComments.concat({
              id: 'id21ed',
              comment: comment,
              user: {
                img: imgExample,
                username: 'user123456',
              },
            })
          );
        }}
      />
    </div>
  );
};
