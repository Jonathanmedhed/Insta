import React from 'react';
import { menuIcon } from '../utils/icons';
import { verifiedIcon } from '../utils/icons';
import moment from 'moment';

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
}) => {
  return (
    <div
      className={`post__header ${className || ''} ${
        isFriendCard ? 'friend-card' : ''
      }`}
    >
      <div className='post__header-left'>
        <div className='post__icon'>
          <img
            alt={`img-${user?.username || post?.user.username}`}
            src={user?.img || post?.user.img}
          />
        </div>
        <div className='post__title'>
          <div className='post__title-left'>
            <div className='post__title-top'>
              <h3>{user?.username || post?.user.username}</h3>
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
                  <span className='--mt-half'>
                    {user?.bio || post?.comment}
                  </span>
                </>
              )}
            </div>
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
