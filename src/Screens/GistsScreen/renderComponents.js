import React from 'react';
import GistItem from '../../Components/GistItem';
import Loader from '../../Components/Loader';

export const renderItem = ({item}) => {
  return <GistItem {...item} />;
};

export const renderFooter = loading => (loading ? <Loader small /> : null);
