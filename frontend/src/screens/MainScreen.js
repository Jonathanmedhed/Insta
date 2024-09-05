import { Post } from '../components/Post';
import { posts, users, comments } from '../utils/data';
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
  const getRandom = (mn, mx) => {
    return Math.random() * (mx - mn) + mn;
  };

  const idGenerator = () => {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      S4() +
      S4()
    );
  };

  const userGenerator = () => {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };

    var a = ['Small', 'Blue', 'Ugly'];
    var b = ['Bear', 'Dog', 'Banana'];

    var rA = Math.floor(Math.random() * a.length);
    var rB = Math.floor(Math.random() * b.length);
    var name = a[rA] + b[rB];
    return name + S4();
  };

  const createUsers = () => {
    let usersPrev = [];
    for (let index = 0; index < 1000; index++) {
      usersPrev.push({
        id: idGenerator(),
        username: userGenerator(),
        img: pics[Math.floor(getRandom(1, pics.length)) - 1],
        posts: [],
        comments: [],
        liked: [],
        friends: '',
      });
    }
    return usersPrev;
  };

  const createComments = () => {
    let commentsPrev = [];
    for (let index = 0; index < 1000; index++) {
      commentsPrev.push({
        id: idGenerator(),
        user: user1,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm',
        likes: 0,
        dislikes: 0,
      });
    }
    return commentsPrev;
  };

  const createdComments = createComments();
  console.log(createdUsers);

  const postsEx = [
    {
      comments: [
        {
          id: 'id21ed',
          comment: 'hello this is a comment xD',
          date: '',
          user: {
            img: '',
            username: 'user123456',
          },
          dislikes: 10,
          disliked: true,
          isReported: false,
          liked: false,
          likes: 20,
        },
        {
          id: 'id231ed',
          comment: 'bye this is a comment :c',
          date: '',
          user: {
            img: '',
            username: 'user123456',
          },
          dislikes: 5,
          disliked: false,
          isReported: false,
          liked: false,
          likes: 20,
        },
      ],
      date: '',
      dislikes: 300,
      disliked: true,
      isFollowed: false,
      isReported: false,
      isSaved: true,
      liked: false,
      likes: 1497,
      media: {
        alt: 'alt',
        src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      },
      type: 'video',
    },
    {
      comments: [
        {
          id: 'id21ed',
          comment: 'hello this is a comment xD',
          date: '',
          user: {
            img: '',
            username: 'user123456',
          },
          dislikes: 20,
          disliked: false,
          isReported: false,
          liked: false,
          likes: 5,
        },
        {
          id: 'id231ed',
          comment: 'bye this is a comment :c',
          date: '',
          user: {
            img: '',
            username: 'user123456',
          },
          dislikes: 5,
          disliked: false,
          isReported: false,
          liked: false,
          likes: 5,
        },
        {
          id: 'id231ed',
          comment: 'bye this is a comment :c',
          date: '',
          user: {
            img: '',
            username: 'user123456',
          },
          dislikes: 50,
          disliked: false,
          isReported: false,
          liked: false,
          likes: 5,
        },
      ],
      date: '',
      dislikes: 1500,
      disliked: false,
      isFollowed: true,
      isReported: false,
      isSaved: false,
      liked: true,
      likes: 400,
      media: {
        alt: 'alt',
        src: '',
      },
      type: 'img',
    },
  ];

  return (
    <div className='--pt-2'>
      {posts.map((post, i) => (
        <Post
          key={i}
          comments={post.comments}
          date={post.date}
          dislikes={post.dislikes}
          disliked={post.disliked}
          isFollowed={post.isFollowed}
          isReported={post.isReported}
          isSaved={post.isSaved}
          liked={post.liked}
          likes={post.likes}
          media={post.media}
          type={post.type}
        />
      ))}
    </div>
  );
};

export default MainScreen;
