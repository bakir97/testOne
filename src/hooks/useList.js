import {useCallback, useEffect, useState} from 'react';
import {getGists} from '../services/gistsServices';

export const useList = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    handleGetGists();
  }, [handleGetGists]);

  const handleGetGists = useCallback(async () => {
    try {
      const response = await getGists(page);
      setList(currList => [...currList, ...response.data]);
      setPage(currPage => currPage + 1);
      setInitialLoading(false);
    } catch (error) {
      setInitialLoading(false);
      setHasError(true);
    }
  }, [page]);

  return {list, loading, hasError, initialLoading};
};
