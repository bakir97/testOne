import React from 'react';
import GistItem from '../../Components/GistItem';
import Loader from '../../Components/Loader';

export const renderItem = (item, handleImageChange) => {
  return <GistItem {...item} onPress={handleImageChange} />;
};

export const renderFooter = loading => (loading ? <Loader small /> : null);
