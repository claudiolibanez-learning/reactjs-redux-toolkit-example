import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../@types';

export const useReduxDispath = () => useDispatch<AppDispatch>();
