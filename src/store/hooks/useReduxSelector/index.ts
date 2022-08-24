import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { RootState } from '../../@types';

export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
