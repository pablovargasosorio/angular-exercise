import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as AccountReducer from './account.reducer';

/**
 * Main state selector
 */
export const selectAccountsState = createFeatureSelector<AccountReducer.State>(
  AccountReducer.accountsFeatureKey
);

/**
 * All adapter entities selector
 */
export const selectAllAccounts = createSelector(
  selectAccountsState,
  AccountReducer.selectAll
);
