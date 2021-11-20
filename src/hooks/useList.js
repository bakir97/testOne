import {useCallback, useEffect, useState} from 'react';
import {getGists} from '../services/gistsServices';

export const useList = () => {
  const [list, setList] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  //initial fetch
  useEffect(() => {
    handleGetGists();
  }, [handleGetGists]);

  //initial fetch handle
  const handleGetGists = useCallback(async () => {
    try {
      const response = await getGists(page);
      setList(response.data);
      setPage(currPage => currPage + 1);
      setInitialLoading(false);
    } catch (error) {
      setInitialLoading(false);
      setErrorMessage(error?.response?.data?.message);
    }
  }, [page]);

  //load more handle
  const handleLoadMoreGists = async () => {
    try {
      setLoading(true);
      const response = await getGists(page);
      setList(currList => [...currList, ...response.data]);
      setPage(currPage => currPage + 1);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(error?.response?.data?.message);
    }
  };

  return {list, loading, errorMessage, initialLoading, handleLoadMoreGists};
};
