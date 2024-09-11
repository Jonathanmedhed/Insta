import React from 'react';

export const Video = ({ controls, autoplay, muted, src }) => {
  return (
    <div className='video'>
      {src && (
        <video
          id='my-video'
          className='video-js'
          controls
          preload='auto'
          poster='MY_VIDEO_POSTER.jpg'
          data-setup='{}'
        >
          <source src={src} type='video/mp4' />
          <source src={src} type='video/webm' />
          <p className='vjs-no-js'>
            To view this video please enable JavaScript, and consider upgrading
            to a web browser that
            <a
              href='https://videojs.com/html5-video-support/'
              rel='noopener noreferrer'
              target='_blank'
            >
              supports HTML5 video
            </a>
          </p>
        </video>
      )}
    </div>
  );
};
