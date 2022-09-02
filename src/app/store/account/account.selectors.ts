import { createFeatureSelector } from '@ngrx/store';
import * as AccountReducer from './account.reducer';

/**
 * Main state selector
 */
export const selectAccountsState = createFeatureSelector<AccountReducer.State>(
  AccountReducer.accountsFeatureKey
);
