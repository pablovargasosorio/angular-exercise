import { createFeatureSelector } from '@ngrx/store';
import * as AppReducer from './app.reducer';

/**
 * Main state selector
 */
export const selectAppsState = createFeatureSelector<AppReducer.State>(
  AppReducer.appsFeatureKey
);
