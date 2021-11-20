import axios from 'axios';
import {api} from './api';

export const getGists = page => {
  const composedUrl = `${api}?page=${page}`;
  return axios.get(composedUrl);
};
