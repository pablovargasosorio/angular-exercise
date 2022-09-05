import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as UserReducer from './user.reducer';

/**
 * Main state selector
 */
export const selectUsersState = createFeatureSelector<UserReducer.State>(
  UserReducer.usersFeatureKey
);

/**
 * All adapter entities selector
 */
export const selectAllUsers = createSelector(
  selectUsersState,
  UserReducer.selectAll
);
