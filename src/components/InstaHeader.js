import React from 'react';
import { menuIcon } from '../utils/icons';
import { verifiedIcon } from '../utils/icons';
import moment from 'moment';
import { Link } from 'react-router-dom';

export const InstaHeader = ({
  className,
  setShowOptions,
  showOptions,
  date,
  user,
  post,
  isFollowed,
  setIsFollowed,
  isFriendCard,
  onSelect,
  unSelect,
  isSelected,
  isPost,
}) => {
  return (
    <div
      className={`post__header ${className || ''} ${
        isFriendCard ? 'friend-card' : ''
      }`}
    >
      <div className='post__header-left'>
        <div className='post__icon'>
          {isPost && post?.user ? (
            <Link to={`users/${post?.user?.id}`}>
              <img
                alt={`img-${user?.username || post?.user.username}`}
                src={user?.img || post?.user?.img}
              />
            </Link>
          ) : (
            <Link to={`users/${user?.id}`}>
              <img alt={`img-${user?.username}`} src={user?.img} />
            </Link>
          )}
        </div>
        <div className='post__title'>
          <div className='post__title-left'>
            <div className='post__title-top'>
              <Link to={`users/${isPost ? post?.user?.id : user?.id}`}>
                <h3>{isPost ? post?.user?.username : user?.username}</h3>
              </Link>
              {!isFriendCard && (
                <span
                  onClick={() => setIsFollowed(!isFollowed)}
                  className={`post__follow ${
                    isFollowed ? 'unfollow' : 'follow'
                  }`}
                >
                  {isFollowed ? 'Unfollow' : 'Follow'}
                </span>
              )}
              <span className='user-verified'>
                {user?.isVerified ? verifiedIcon : ''}
              </span>
              {!isFriendCard && (
                <>
                  <span className='--ml-qter'>•</span>{' '}
                  <span className='post-time --ml-qter'>
                    {moment(date).fromNow()}
                  </span>
                </>
              )}
            </div>
            {!isFriendCard && (
              <div className='--mt-qter'>{user?.bio || post?.comment}</div>
            )}
          </div>
        </div>
      </div>
      {isFriendCard ? (
        <div
          className={`selector ${isSelected ? '--selected' : ''}`}
          onClick={isSelected ? unSelect : onSelect}
        ></div>
      ) : (
        <div
          className='post__header-right'
          onClick={() => setShowOptions(!showOptions)}
        >
          {menuIcon}
        </div>
      )}
    </div>
  );
};
