import React, { useEffect, useState } from 'react';
import { Video } from './Video';
import Input from './Input';
import ImageComponent from './ImageComponent';
import { formatNumberFull, idGenerator } from '../utils/functions';
import { Comments } from './Comments';
import { InstaHeader } from './InstaHeader';
import { Overlay } from './Overlay';
import { InstaOptions } from './InstaOptions';
import moment from 'moment';
import { useNavigate, useParams } from 'react-router-dom';
import { ShareBox } from './ShareBox';

export const CommentSection = ({ user, users, posts }) => {
  let { id } = useParams();
  const navigate = useNavigate();

  const postFound = posts?.find((po) => {
    return po?.id?.toString() === id?.toString();
  });

  const [post] = useState(postFound || {});
  const [comment, setComment] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [followed, setFollowed] = useState(post.isFollowed || false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [currentComments, setCurrentComments] = useState(post.comments || []);
  const [currentDislikes, setCurrentDislikes] = useState(post.dislikes || []);
  const [currentLikes, setCurrentLikes] = useState(post.likes || []);
  const [saved, setSaved] = useState(post.isSaved || false);
  const [isReported, setIsReported] = useState(post.isReported || false);
  const [showShare, setShowShare] = useState(false);

  let checkLiked =
    currentLikes &&
    currentLikes.length > 0 &&
    currentLikes.find((e) => e.id === user.id);
  let checkDisliked =
    currentDislikes &&
    currentDislikes.length > 0 &&
    currentDislikes.find((e) => e.id === user.id);

  const handleLike = () => {
    if (!checkLiked) {
      setCurrentLikes((currentLikes) => [...currentLikes, user]);
    } else if (checkLiked) {
      setCurrentLikes((l) => l.filter((item) => item.id !== user.id));
    }
    if (checkDisliked) {
      setCurrentDislikes((l) => l.filter((item) => item.id !== user.id));
    }
  };

  const handleDislike = () => {
    if (!checkDisliked) {
      setCurrentDislikes((currentDislikes) => [...currentDislikes, user]);
    } else if (checkDisliked) {
      setCurrentDislikes((l) => l.filter((item) => item.id !== user.id));
    }
    if (checkLiked) {
      setCurrentLikes((l) => l.filter((item) => item.id !== user.id));
    }
  };

  const menuOptions = [
    {
      className: isReported ? '--color-blue' : '--color-danger',
      label: isReported ? 'Undo report' : 'Report',
      onClick: () => {
        setIsReported(!isReported);
        setShowOptions(false);
        //hide();
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

  useEffect(
    () => {
      if (!postFound) {
        navigate('/');
      }
    } /**, [] */
  );

  return (
    <div className='main'>
      {postFound ? (
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
          <Overlay hide={() => setShowShare(false)} show={showShare}>
            <ShareBox hide={() => setShowShare(false)} user={user} />
          </Overlay>
          <div className='comments__content'>
            <div className='comments__media'>
              {post?.type === 'video' ? (
                <Video
                  controls={false}
                  autoplay={false}
                  muted={false}
                  src={post?.media}
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
                date={post?.date}
                isFollowed={followed}
                setShowOptions={setShowOptions}
                setIsFollowed={setFollowed}
                showOptions={showOptions}
                post={post}
                isPost={true}
              />
              {isReported ? (
                <div
                  className='reported-post'
                  onClick={() => setIsReported(!isReported)}
                >
                  <div className='reported-text'>Reported</div>
                  <div className='reported-undo'>
                    undo
                    <i className='fa fa-undo' aria-hidden='true' />
                  </div>
                </div>
              ) : (
                <>
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
                      isDisLiked={currentDislikes ? checkDisliked : false}
                      isLiked={currentLikes ? checkLiked : false}
                      dislikes={currentDislikes.length}
                      likes={currentLikes.length}
                      setShowShare={setShowShare}
                      showShare={showShare}
                      setSaved={setSaved}
                      saved={saved}
                      post={post}
                      user={post?.user}
                      isCommentSection={true}
                    />
                    <span className='post__amounts --bold'>
                      <span className='post__amount'>
                        {formatNumberFull(currentLikes.length)}
                      </span>{' '}
                      likes
                    </span>
                    <span className='post__amounts --bold'>
                      <span className='post__amount'>
                        {formatNumberFull(currentDislikes.length)}
                      </span>{' '}
                      dislikes
                    </span>
                    <span className='post-time'>
                      {moment(post.date).fromNow()}
                    </span>
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
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        'Post not Found'
      )}
    </div>
  );
};
