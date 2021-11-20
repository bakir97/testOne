import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import GistItem from '../../Components/GistItem';
import Header from '../../Components/Header';
import Loader from '../../Components/Loader';
import {useList} from '../../hooks/useList';

const GistsScreen = () => {
  const {list, initialLoading, handleLoadMoreGists} = useList();

  const renderItem = ({item}) => {
    return <GistItem {...item} />;
  };

  if (initialLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item, i) => item.id + i}
        ListHeaderComponent={Header}
        onEndReached={handleLoadMoreGists}
      />
    </SafeAreaView>
  );
};

export default GistsScreen;
