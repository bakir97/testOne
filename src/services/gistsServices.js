import axios from 'axios';
import {api} from './Api';

export const getGists = page => {
  const composedUrl = `${api}?page=${page}`;
  return axios.get(composedUrl);
};
