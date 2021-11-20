import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import ErrorItem from '../../Components/ErrorItem';
import Header from '../../Components/Header';
import Loader from '../../Components/Loader';
import {useList} from '../../hooks/useList';
import {renderFooter, renderItem} from './renderComponents';

const GistsScreen = () => {
  const {list, initialLoading, handleLoadMoreGists, loading, errorMessage} =
    useList();

  if (initialLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView>
      <ErrorItem message={errorMessage} />
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item, i) => item.id + i}
        ListHeaderComponent={Header}
        onEndReached={handleLoadMoreGists}
        ListFooterComponent={renderFooter(loading)}
      />
    </SafeAreaView>
  );
};

export default GistsScreen;
