import { Action, ThunkAction } from '@reduxjs/toolkit';

import store from '..';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  void,
  RootState,
  null | undefined | unknown,
  Action<string>
>;
