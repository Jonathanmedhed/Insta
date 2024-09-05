import React, { useState } from 'react';
import { CommentSection } from './CommentSection';
import Input from './Input';
import { Overlay } from './Overlay';
import { Video } from './Video';
import ImageComponent from './ImageComponent';
import imgExample from '../images/example-post.webp';
import { Comments } from './Comments';
import { InstaHeader } from './InstaHeader';
import { InstaOptions } from './InstaOptions';
import { ShareBox } from './ShareBox';

export const Post = ({
  comments,
  date,
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
  const [currentDislikes, setCurrentDislikes] = useState(dislikes || []);
  const [currentLikes, setcurrentLikes] = useState(likes || []);
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
          setComments={setCurrentComments}
          date={date}
          dislikes={currentDislikes}
          disliked={isDisLiked}
          isFollowed={followed}
          isReported={reported}
          liked={liked}
          likes={currentLikes}
          media={media}
          type={type}
          isSaved={isSaved}
        />
      </Overlay>
      <Overlay hide={() => setShowComments(false)} show={true}>
        <ShareBox />
      </Overlay>
      <InstaHeader
        date={date}
        setShowOptions={setShowOptions}
        showOptions={showOptions}
      />
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
      <InstaOptions
        handleDislike={handleDislike}
        handleLike={handleLike}
        isDisLiked={isDisLiked}
        isLiked={isLiked}
        dislikes={currentDislikes}
        likes={currentLikes}
        setShowComments={setShowComments}
        showComments={showComments}
        setSaved={setSaved}
        saved={saved}
        isCommentSection={true}
      />
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
        className='post__input'
        type='emoji'
        placeholder='Add a comment...'
        value={comment}
        onChange={setComment}
        onEnter={handleAddComment}
      />
    </div>
  );
};
