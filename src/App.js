import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainScreen from './screens/MainScreen';
import InstaIcon from './images/insta.png';
import Profile from './components/Profile';
import { CommentSection } from './components/CommentSection';
import {
  createDate,
  getRandom,
  idGenerator,
  userGenerator,
} from './utils/functions';
import personImg1 from './images/person1.jpg';
import personImg2 from './images/person2.jpg';
import personImg3 from './images/person3.jpg';
import personImg4 from './images/person4.jpg';
import personImg5 from './images/person5.jpg';
import landscapeImg1 from './images/landscape1.jpg';
import landscapeImg2 from './images/landscape2.jpg';
import landscapeImg3 from './images/landscape3.jpg';
import landscapeImg4 from './images/landscape4.jpg';
import landscapeImg5 from './images/landscape5.jpg';
import partyImg1 from './images/party1.jpg';
import partyImg2 from './images/party2.jpg';
import partyImg3 from './images/party3.jpg';
import partyImg4 from './images/party4.jpg';
import partyImg5 from './images/party5.jpg';
import { useState } from 'react';

const App = () => {
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
  const videos = [
    'https://videos.pexels.com/video-files/19164356/19164356-sd_426_240_25fps.mp4',
    'https://cdn.pixabay.com/video/2021/01/11/61695-499594106_tiny.mp4',
    'https://cdn.pixabay.com/video/2020/11/25/57315-484331186_tiny.mp4',
    'https://videos.pexels.com/video-files/2795405/2795405-sd_240_426_25fps.mp4',
    'https://videos.pexels.com/video-files/2795396/2795396-sd_240_426_25fps.mp4',
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
        following: [],
        followers: [],
      });
    }
    //add friends
    let usersUpdated = [];
    for (let index = 0; index < usersPrev.length - 1; index++) {
      let userToUpdate = usersPrev[index];
      userToUpdate.followers = usersPrev.slice(
        getRandom(55, 61),
        getRandom(62, 66)
      );
      userToUpdate.following = usersPrev.slice(
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
    // create img posts
    for (let index = 0; index < 250; index++) {
      postsPrev.push({
        id: idGenerator(),
        comment: text.substring(0, getRandom(30, 60)),
        comments: createdComments.slice(getRandom(0, 50), getRandom(51, 99)),
        date: createDate(),
        dislikes: createdUsers.slice(getRandom(1, 24), getRandom(25, 49)),
        isReported: false,
        isSaved: false,
        likes: createdUsers.slice(getRandom(50, 74), getRandom(75, 98)),
        media: pics[Math.floor(getRandom(1, pics.length)) - 1],
        user: createdUsers[Math.floor(getRandom(1, createdUsers.length)) - 1],
      });
    }
    // create video posts
    for (let index = 0; index < 100; index++) {
      postsPrev.push({
        comment: text.substring(0, getRandom(30, 60)),
        comments: createdComments.slice(getRandom(0, 50), getRandom(51, 99)),
        date: createDate(),
        dislikes: createdUsers.slice(getRandom(1, 24), getRandom(25, 49)),
        isReported: false,
        isSaved: false,
        likes: createdUsers.slice(getRandom(50, 74), getRandom(75, 98)),
        media: videos[Math.floor(getRandom(1, videos.length)) - 1],
        user: createdUsers[Math.floor(getRandom(1, createdUsers.length)) - 1],
      });
    }
    return postsPrev;
  };

  const createdPosts = createPosts();

  //add posts to users
  let usersUpdated = [];
  for (let index = 0; index < createdUsers.length - 1; index++) {
    let userToUpdate = createdUsers[index];
    userToUpdate.posts = createdPosts.slice(
      getRandom(0, 100),
      getRandom(101, 250)
    );
    userToUpdate.saved = createdPosts.slice(
      getRandom(0, 100),
      getRandom(101, 250)
    );
    usersUpdated.push(userToUpdate);
  }

  const [users] = useState(usersUpdated || []);

  const [posts] = useState(createdPosts.sort((b, a) => a.date - b.date) || []);

  return (
    <>
      <BrowserRouter>
        <Header
          className=''
          icon={<img alt='insta-icon' src={InstaIcon} />}
          title='InstaApp'
          user={users[0]}
        />
        <Routes>
          <Route
            path='/'
            element={<MainScreen posts={posts} user={users[0]} users={users} />}
          />
          <Route
            path='users/:id'
            element={<Profile posts={posts} user={users[0]} users={users} />}
          />
          <Route
            path='posts/:id'
            element={
              <CommentSection posts={posts} user={users[0]} users={users} />
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer className='' />
    </>
  );
};

export default App;
