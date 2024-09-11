import React, { useEffect, useState } from 'react';
import savedIcon from '../images/tag.svg';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Profile = ({ users, user: mainUser }) => {
  let { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  var userFound = users.find((us) => {
    return us.id.toString() === id.toString();
  });

  const [activeTab, setActiveTab] = useState(0);
  const [user] = useState(userFound);

  useEffect(
    () => {
      if (!userFound) {
        navigate('/');
      }
    } /**, [] */
  );

  return (
    <div className='main'>
      {user && (
        <div className='profile'>
          <div className='profile__top'>
            {user?.img && (
              <div className='profile__pic'>
                <img alt='profile-pic' src={user?.img} />
              </div>
            )}
            <div className='profile__info'>
              <div className='profile__info-header'>
                <div className='profile__info-username'>{user?.username}</div>
              </div>
              <div className='profile__info-body'>
                <div className='--mr-1'>
                  Posts: <span className='--bold'>{user?.posts?.length}</span>
                </div>
                <div className='--mr-1'>
                  Followers:{' '}
                  <span className='--bold'>{user?.followers?.length}</span>
                </div>
                <div>
                  Following:{' '}
                  <span className='--bold'>{user?.following?.length}</span>
                </div>
              </div>
            </div>
          </div>
          <div className='profile__bottom'>
            <div className='profile__bottom-header'>
              <div
                className={`profile__bot-item ${
                  activeTab === 0 ? 'active' : ''
                }`}
                onClick={() => setActiveTab(0)}
              >
                <i className='fa fa-sticky-note-o' />
                <span>Posts</span>
              </div>
              {pathname.includes(mainUser.id) && (
                <div
                  className={`profile__bot-item ${
                    activeTab === 1 ? 'active' : ''
                  }`}
                  onClick={() => setActiveTab(1)}
                >
                  <img alt='saved' src={savedIcon} />
                  <span>Saved</span>
                </div>
              )}
              <div
                className={`profile__bot-item ${
                  activeTab === 2 ? 'active' : ''
                }`}
                onClick={() => setActiveTab(2)}
              >
                <img alt='saved' src={savedIcon} />
                <span>Followers</span>
              </div>
              <div
                className={`profile__bot-item ${
                  activeTab === 3 ? 'active' : ''
                }`}
                onClick={() => setActiveTab(3)}
              >
                <img alt='saved' src={savedIcon} />
                <span>Following</span>
              </div>
            </div>
            <div className='profile__bottom-body'>
              {activeTab === 0
                ? user?.posts?.map((post, i) => (
                    <div key={i}>
                      {post.media && <img alt={`post-${i}`} src={post.media} />}
                    </div>
                  ))
                : activeTab === 1
                ? user?.saved?.map((post, i) => (
                    <div key={i}>
                      {post.media && <img alt={`post-${i}`} src={post.media} />}
                    </div>
                  ))
                : activeTab === 2
                ? user?.followers?.map((user, i) => (
                    <div key={i}>
                      <span>{user?.username}</span>
                      {user.img && <img alt={`user-${i}`} src={user.img} />}
                    </div>
                  ))
                : activeTab === 3 &&
                  user?.following?.map((user, i) => (
                    <div key={i}>
                      <span>{user?.username}</span>
                      {user.img && <img alt={`user-${i}`} src={user.img} />}
                    </div>
                  ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
