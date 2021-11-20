import {Dimensions, StyleSheet} from 'react-native';

const screen = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    height: screen.height,
    width: screen.width,
  },
  image: {
    height: 300,
    width: '100%',
  },
});

export const composeImageStyles = opacity => {
  return [
    {
      opacity,
      transform: [
        {
          scale: opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0.85, 1],
          }),
        },
      ],
    },
    styles.image,
  ];
};
