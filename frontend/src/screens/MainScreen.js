import { Post } from '../components/Post';
import imgExample from '../images/example-post.webp';

const MainScreen = () => {
  var d1 = new Date();
  d1.setDate(d1.getDate() - 5);

  var d2 = new Date();
  d2.setMonth(d2.getMonth() - 3);

  var d3 = new Date();
  d3.setDate(d3.getDate() - 6);
  d3.setFullYear(d3.getFullYear() - 1);

  var d4 = new Date();
  d4.setHours(d4.getHours() - 2);

  const posts = [
    {
      comments: [
        {
          id: 'id21ed',
          comment: 'hello this is a comment xD',
          date: d2,
          user: {
            img: imgExample,
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
          date: d4,
          user: {
            img: imgExample,
            username: 'user123456',
          },
          dislikes: 5,
          disliked: false,
          isReported: false,
          liked: false,
          likes: 20,
        },
      ],
      date: d3,
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
          date: d4,
          user: {
            img: imgExample,
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
          date: d2,
          user: {
            img: imgExample,
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
          date: d3,
          user: {
            img: imgExample,
            username: 'user123456',
          },
          dislikes: 50,
          disliked: false,
          isReported: false,
          liked: false,
          likes: 5,
        },
      ],
      date: d3,
      dislikes: 1500,
      disliked: false,
      isFollowed: true,
      isReported: false,
      isSaved: false,
      liked: true,
      likes: 400,
      media: {
        alt: 'alt',
        src: imgExample,
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
