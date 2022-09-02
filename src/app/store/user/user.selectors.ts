import { createFeatureSelector } from '@ngrx/store';
import * as UserReducer from './user.reducer';

/**
 * Main state selector
 */
export const selectUsersState = createFeatureSelector<UserReducer.State>(
  UserReducer.usersFeatureKey
);
