import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import AnimatedImage from '../../Components/AnimatedImage';
import ErrorItem from '../../Components/ErrorItem';
import Header from '../../Components/Header';
import Loader from '../../Components/Loader';
import {useAnimatedImage} from '../../hooks/useAnimatedImage';
import {useList} from '../../hooks/useList';
import {renderFooter, renderItem} from './renderComponents';

const GistsScreen = () => {
  const {list, initialLoading, handleLoadMoreGists, loading, errorMessage} =
    useList();

  const {image, handleImageChange} = useAnimatedImage();

  const handleRenderItem = ({item}) => {
    return renderItem(item, handleImageChange);
  };

  if (initialLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView>
      <ErrorItem message={errorMessage} />
      <AnimatedImage uri={image} handleImageChange={handleImageChange} />
      <FlatList
        data={list}
        renderItem={handleRenderItem}
        keyExtractor={(item, i) => item.id + i}
        ListHeaderComponent={Header}
        onEndReached={handleLoadMoreGists}
        ListFooterComponent={renderFooter(loading)}
      />
    </SafeAreaView>
  );
};

export default GistsScreen;
