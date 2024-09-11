import { lazy } from 'react';
import RenderOnViewportEntry from '../components/RenderOnViewportEntry';
const Post = lazy(() => import('../components/Post'));

const MainScreen = ({ users, posts }) => {
  return (
    <div className='main'>
      {posts &&
        posts.length > 0 &&
        posts.map((post, i) => (
          <span key={i}>
            <RenderOnViewportEntry
              threshold={0.25}
              className='widget-tile-container'
              style={{ minHeight: '240px' }}
            >
              <Post post={post} user={users[0]} />
            </RenderOnViewportEntry>
          </span>
        ))}
    </div>
  );
};

export default MainScreen;
