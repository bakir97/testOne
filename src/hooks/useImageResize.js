import {useCallback, useEffect, useMemo} from 'react';
import {Animated} from 'react-native';

export const useImageResize = (image, resetImage) => {
  const opacity = useMemo(() => new Animated.Value(0), []);

  //on image url change trigger animation
  useEffect(() => {
    image && onUrlChange();
  }, [image, onUrlChange]);

  // 1.Animate to show the image 2.wait a second 3.hide image and reset image url to null
  const onUrlChange = useCallback(() => {
    animateHandle(1).start(() =>
      setTimeout(() => {
        animateHandle(0).start(resetImage);
      }, 1000),
    );
  }, [animateHandle, resetImage]);

  const animateHandle = useCallback(
    toValue =>
      Animated.timing(opacity, {
        toValue: toValue,
        duration: 500,
        useNativeDriver: true,
      }),
    [opacity],
  );

  return {opacity};
};
