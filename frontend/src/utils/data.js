/********************************** Users *******************************************************/

const user1 = {
  id: 'asdskjdh23',
  username: 'user12211',
  img: false,
  posts: [],
  comments: [],
  liked: [],
  friends: '',
};

const user2 = {
  id: 'askjdh2323',
  username: 'user12212',
  img: false,
  posts: [],
  comments: [],
  liked: [],
  friends: '',
};

const user3 = {
  id: 'asdskjdh23',
  username: 'user12213',
  img: false,
  posts: [],
  comments: [],
  liked: [],
  friends: '',
};

const user4 = {
  id: 'asdjdh2323',
  username: 'user12214',
  img: false,
  posts: [],
  comments: [],
  liked: [],
  friends: '',
};

const user5 = {
  id: 'asdskjdh23',
  username: 'user12215',
  img: false,
  posts: [],
  comments: [],
  liked: [],
  friends: '',
};

/********************************** POSTS *******************************************************/
const post1 = {
  id: 'asdskjdh23',
  user: user1,
  media: false,
  comments: [],
  likes: 0,
  dislikes: 0,
};

const post2 = {
  id: 'askjdh2323',
  user: user1,
  media: false,
  comments: [],
  likes: 0,
  dislikes: 0,
};

const post3 = {
  id: 'asdskjdh23',
  user: user1,
  media: false,
  comments: [],
  likes: 0,
  dislikes: 0,
};

const post4 = {
  id: 'asdjdh2323',
  user: { user1 },
  media: false,
  comments: [],
  likes: 0,
  dislikes: 0,
};

const post5 = {
  id: 'asdskjdh23',
  user: { user1 },
  media: false,
  comments: [],
  likes: 0,
  dislikes: 0,
};
const post6 = {
  id: 'asdskjdhdsf23',
  user: user1,
  media: false,
  comments: [],
  likes: 0,
  dislikes: 0,
};

const post7 = {
  id: 'askjdh2sad323',
  user: user2,
  media: false,
  comments: [],
  likes: 0,
  dislikes: 0,
};

const post8 = {
  id: 'asdskjdghdh23',
  user: user2,
  media: false,
  comments: [],
  likes: 0,
  dislikes: 0,
};

const post9 = {
  id: 'asdjdh2gfdg323',
  user: user3,
  media: false,
  comments: [],
  likes: 0,
  dislikes: 0,
};

const post10 = {
  id: 'asdskjdhaasd23',
  user: user3,
  media: false,
  comments: [],
  likes: 0,
  dislikes: 0,
};

/********************************** COMMENTS *******************************************************/
const comment1 = {
  id: 'asdskjdh23',
  user: user1,
  comment:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm',
  likes: 0,
  dislikes: 0,
};

const comment2 = {
  id: 'askjdh2323',
  user: user1,
  comment:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu',
  likes: 0,
  dislikes: 0,
};

const comment3 = {
  id: 'asdskjdh23',
  user: user1,
  comment: 'Lorem ipsum dolor sit',
  likes: 0,
  dislikes: 0,
};

const comment4 = {
  id: 'asdjdh2323',
  user: { user1 },
  comment:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor',
  likes: 0,
  dislikes: 0,
};

const comment5 = {
  id: 'asdskjdh23',
  user: { user1 },
  comment:
    'at cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  likes: 0,
  dislikes: 0,
};
const comment6 = {
  id: 'asdskjdhdsf23',
  user: user1,
  comment:
    'uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  likes: 0,
  dislikes: 0,
};

const comment7 = {
  id: 'askjdh2sad323',
  user: user2,
  comment:
    'iatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  likes: 0,
  dislikes: 0,
};

const comment8 = {
  id: 'asdskjdghdh23',
  user: user2,
  comment:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuqui officia deserunt mollit anim id est laborum.',
  likes: 0,
  dislikes: 0,
};

const comment9 = {
  id: 'asdjdh2gfdg323',
  user: user3,
  comment:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedt, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  likes: 0,
  dislikes: 0,
};

const comment10 = {
  id: 'asdskjdhaasd23',
  user: user3,
  comment:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  likes: 0,
  dislikes: 0,
};

/********************************** COMMENTS *******************************************************/

const d1 = new Date();
d1.setDate(d1.getDate() - 5);

const d2 = new Date();
d2.setMonth(d2.getMonth() - 3);

const d3 = new Date();
d3.setDate(d3.getDate() - 6);
d3.setFullYear(d3.getFullYear() - 1);

const d4 = new Date();
d4.setHours(d4.getHours() - 2);

export const users = [user1, user2, user3, user4, user5];
export const posts = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8,
  post9,
  post10,
];

export const comments = [
  comment1,
  comment2,
  comment3,
  comment4,
  comment5,
  comment6,
  comment7,
  comment8,
  comment9,
  comment10,
];

export const dates = [d1, d2, d3, d4];
