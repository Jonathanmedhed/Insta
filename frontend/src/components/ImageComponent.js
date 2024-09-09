import React, { useEffect } from 'react';

const ImageComponent = ({ alt, className, onClick, onLoad, src }) => {
  const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.src = src;

      img.onload = resolve;

      img.onerror = reject;
    });
  };

  useEffect(() => {
    preloadImage(src).then(() => {
      console.log('Image preloaded');
      onLoad && onLoad(true);
    });
  });

  return (
    <span onClick={onClick}>
      <img alt={alt} className={className} src={src} />
    </span>
  );
};

export default ImageComponent;
