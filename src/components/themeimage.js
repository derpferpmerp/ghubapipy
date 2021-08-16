import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const getCloudinaryImageUrl = ({ mode }) => {
  if (mode === "dark") {
    return `https://i.ibb.co/XX9Btvr/darkmode.png`
  } else {
    return `https://i.ibb.co/j562jyT/brightness-1.png`;
  }
}

const ThemeImage = ({ mode }) => {
    const url = getCloudinaryImageUrl({ mode });
    return (
      <div>
        <LazyLoadImage
            style={{ marginBottom: '0' }}
            alt={"MODE"}
            height="240px"
            src={url}
            width="240px"
        />
      </div>
    )
}

export default ThemeImage;
