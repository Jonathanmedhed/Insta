import React from 'react';
import iconExample from '../images/prog-bg-sm.jpg';
import { menuIcon } from '../utils/icons';
import { verifiedIcon } from '../utils/icons';
import moment from 'moment';

export const InstaHeader = ({
  className,
  setShowOptions,
  showOptions,
  date,
}) => {
  return (
    <div className={`post__header ${className || ''}`}>
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
              <span className='post-time --ml-qter'>
                {moment(date).fromNow()}
              </span>
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
  );
};
