//import { CommentSection } from '../components/CommentSection';
import { Post } from '../components/Post';
import imgExample from '../images/example-post.webp';

const MainScreen = () => {
  const posts = [
    {
      comments: [
        {
          id: 'id21ed',
          comment: 'hello this is a comment xD',
          user: {
            img: imgExample,
            username: 'user123456',
          },
        },
        {
          id: 'id231ed',
          comment: 'bye this is a comment :c',
          user: {
            img: imgExample,
            username: 'user123456',
          },
        },
      ],
      dislikes: 10950300,
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
          user: {
            img: imgExample,
            username: 'user123456',
          },
        },
        {
          id: 'id231ed',
          comment: 'bye this is a comment :c',
          user: {
            img: imgExample,
            username: 'user123456',
          },
        },
        {
          id: 'id231ed',
          comment: 'bye this is a comment :c',
          user: {
            img: imgExample,
            username: 'user123456',
          },
        },
      ],
      dislikes: 10950300,
      disliked: false,
      isFollowed: true,
      isReported: false,
      isSaved: false,
      liked: true,
      likes: 1497,
      media: {
        alt: 'alt',
        src: imgExample,
      },
      type: 'img',
    },
  ];

  return (
    <div className='--pt-2'>
      {/**
      <CommentSection
        comments={posts[0].comments}
        dislikes={posts[0].dislikes}
        disliked={posts[0].disliked}
        liked={posts[0].liked}
        likes={posts[0].likes}
        media={posts[0].media}
        type={posts[0].type}
      />
       */}
      {posts.map((post, i) => (
        <Post
          key={i}
          comments={post.comments}
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
