import React, { useState } from 'react';
import { CommentSection } from './CommentSection';
import Input from './Input';
import { Overlay } from './Overlay';
import { Video } from './Video';
import ImageComponent from './ImageComponent';
import { Comments } from './Comments';
import { InstaHeader } from './InstaHeader';
import { InstaOptions } from './InstaOptions';
import { ShareBox } from './ShareBox';
import { idGenerator } from '../utils/functions';

const Post = ({ key, post, user }) => {
  const [comment, setComment] = useState('');
  const [currentComments, setCurrentComments] = useState(post?.comments || []);
  const [currentDislikes, setCurrentDislikes] = useState(post?.dislikes || []);
  const [currentLikes, setcurrentLikes] = useState(post?.likes || []);
  const [followed, setFollowed] = useState(post?.isFollowed || false);
  const [isLiked, setIsLiked] = useState(post?.liked || false);
  const [isDisLiked, setIsDisLiked] = useState(post?.disliked || false);
  const [reported, setReported] = useState(post?.isReported || false);
  const [saved, setSaved] = useState(post?.isSaved || false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showShare, setShowShare] = useState(false);
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
      onClick: () => {
        setReported(!reported);
        setShowOptions(false);
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
    <div className='post' key={key}>
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
          close={() => setShowComments(false)}
          comments={currentComments}
          setComments={setCurrentComments}
          date={post?.date}
          dislikes={currentDislikes}
          disliked={isDisLiked}
          hide={() => setShowComments(false)}
          isFollowed={followed}
          isReported={reported}
          setIsReported={setReported}
          liked={post?.liked}
          likes={currentLikes}
          media={post?.media}
          type={post?.type}
          isSaved={post?.isSaved}
          user={user}
          post={post}
        />
      </Overlay>
      <Overlay hide={() => setShowShare(false)} show={showShare}>
        <ShareBox hide={() => setShowShare(false)} user={user} />
      </Overlay>
      <InstaHeader
        date={post?.date}
        isFollowed={followed}
        setShowOptions={setShowOptions}
        setIsFollowed={setFollowed}
        showOptions={showOptions}
        post={post}
      />
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
      {reported ? (
        <div className='reported-post' onClick={() => setReported(!reported)}>
          <div className='reported-text'>Reported</div>
          <div className='reported-undo'>
            undo
            <i className='fa fa-undo' aria-hidden='true' />
          </div>
        </div>
      ) : (
        <>
          <InstaOptions
            handleDislike={handleDislike}
            handleLike={handleLike}
            isDisLiked={isDisLiked}
            isLiked={isLiked}
            dislikes={currentDislikes}
            likes={currentLikes}
            setShowShare={setShowShare}
            showShare={showShare}
            setShowComments={setShowComments}
            showComments={showComments}
            setSaved={setSaved}
            saved={saved}
            isCommentSection={true}
          />
          <div className='post__description'>
            <p className='--bold --mt-qter'>
              This is a description about the vid
            </p>
          </div>
          <Comments
            className='--mt-1'
            comments={currentComments.sort((b, a) => a.date - b.date)}
            max={2}
            user={user}
          />
          <span
            className='--pointer --mt-qter'
            onClick={() => setShowComments(!showComments)}
          >
            View all comments
          </span>
          <Input
            className='post__input'
            type='emoji'
            placeholder='Add a comment...'
            value={comment}
            onChange={setComment}
            onEnter={handleAddComment}
          />
        </>
      )}
    </div>
  );
};

export default Post;
