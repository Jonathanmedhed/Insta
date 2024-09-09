import { lazy, useState } from 'react';
import personImg1 from '../images/person1.jpg';
import personImg2 from '../images/person2.jpg';
import personImg3 from '../images/person3.jpg';
import personImg4 from '../images/person4.jpg';
import personImg5 from '../images/person5.jpg';
import landscapeImg1 from '../images/landscape1.jpg';
import landscapeImg2 from '../images/landscape2.jpg';
import landscapeImg3 from '../images/landscape3.jpg';
import landscapeImg4 from '../images/landscape4.jpg';
import landscapeImg5 from '../images/landscape5.jpg';
import partyImg1 from '../images/party1.jpg';
import partyImg2 from '../images/party2.jpg';
import partyImg3 from '../images/party3.jpg';
import partyImg4 from '../images/party4.jpg';
import partyImg5 from '../images/party5.jpg';
import RenderOnViewportEntry from '../components/RenderOnViewportEntry';
import {
  createDate,
  getRandom,
  idGenerator,
  userGenerator,
} from '../utils/functions';
const Post = lazy(() => import('../components/Post'));

const MainScreen = () => {
  const pics = [
    personImg1,
    personImg2,
    personImg3,
    personImg4,
    personImg5,
    landscapeImg1,
    landscapeImg2,
    landscapeImg3,
    landscapeImg4,
    landscapeImg5,
    partyImg1,
    partyImg2,
    partyImg3,
    partyImg4,
    partyImg5,
  ];

  let trueOrFalse = [true, false];

  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  /********************************Create Users*********************************/
  const createUsers = () => {
    let usersPrev = [];
    for (let index = 0; index < 100; index++) {
      usersPrev.push({
        id: idGenerator(),
        username: userGenerator(),
        bio: text.substring(0, getRandom(1, 30)),
        img: pics[Math.floor(getRandom(1, pics.length)) - 1],
        isFollowed: false,
        isVerified: trueOrFalse[getRandom(0, 2)],
        posts: [],
        comments: [],
        liked: [],
        friends: '',
      });
    }
    //add friends
    let usersUpdated = [];
    for (let index = 0; index < usersPrev.length - 1; index++) {
      let userToUpdate = usersPrev[index];
      userToUpdate.friends = usersPrev.slice(
        getRandom(55, 61),
        getRandom(62, 66)
      );
      usersUpdated.push(userToUpdate);
    }
    return usersUpdated;
  };

  const createdUsers = createUsers();

  /********************************Create Comments******************************/

  const createComments = () => {
    let commentsPrev = [];
    for (let index = 0; index < 100; index++) {
      commentsPrev.push({
        id: idGenerator(),
        date: createDate(),
        comment: text.substring(0, getRandom(1, text.length - 1)),
        disliked: false,
        dislikes: Math.round(getRandom(1, 1000)),
        liked: false,
        likes: Math.round(getRandom(1, 1000)),
        user: createdUsers[Math.floor(getRandom(1, createdUsers.length)) - 1],
      });
    }
    return commentsPrev;
  };

  const createdComments = createComments();

  /********************************Create Posts**********************************/
  const createPosts = () => {
    let postsPrev = [];
    for (let index = 0; index < 250; index++) {
      postsPrev.push({
        comment: text.substring(0, getRandom(30, 60)),
        comments: createdComments.slice(getRandom(0, 50), getRandom(51, 99)),
        date: createDate(),
        dislikes: Math.round(getRandom(1, 250)),
        disliked: false,
        isReported: false,
        isSaved: false,
        liked: false,
        likes: Math.round(getRandom(1, 250)),
        media: pics[Math.floor(getRandom(1, pics.length)) - 1],
        user: createdUsers[Math.floor(getRandom(1, createdUsers.length)) - 1],
      });
    }
    return postsPrev;
  };

  const createdPosts = createPosts();

  const [users, setUsers] = useState(createdUsers);
  const [posts, setPosts] = useState(createdPosts);
  const [comments, setComments] = useState(createdComments);

  return (
    <div className='--pt-2'>
      {posts &&
        posts.length > 0 &&
        posts.map((post, i) => (
          <span key={i}>
            <RenderOnViewportEntry
              threshold={0.25}
              className='widget-tile-container'
              style={{ minHeight: '240px' }}
            >
              <Post post={post} key={i} user={users[0]} />
            </RenderOnViewportEntry>
          </span>
        ))}
    </div>
  );
};

export default MainScreen;
