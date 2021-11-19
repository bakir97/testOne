import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import GistItem from '../../Components/GistItem';
import Loader from '../../Components/Loader';
import {useList} from '../../hooks/useList';

const GistsScreen = () => {
  const {list, initialLoading} = useList();
  console.log(list, 'list');
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
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default GistsScreen;
