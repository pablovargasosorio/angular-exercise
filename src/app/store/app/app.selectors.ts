import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as AppReducer from './app.reducer';

/**
 * Main state selector
 */
export const selectAppsState = createFeatureSelector<AppReducer.State>(
  AppReducer.appsFeatureKey
);

/**
 * All adapter entities selector
 */
export const selectAllApps = createSelector(
  selectAppsState,
  AppReducer.selectAll
);
