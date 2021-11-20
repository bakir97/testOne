import {useState} from 'react';

export const useAnimatedImage = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = url => {
    setImage(url);
  };

  return {image, handleImageChange};
};
