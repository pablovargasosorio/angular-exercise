import { ActionReducerMap } from '@ngrx/store';
import * as fromUser from './user/user.reducer';
import * as fromAccount from './account/account.reducer';
import * as fromApp from './app/app.reducer';

export interface AppState {
  [fromUser.usersFeatureKey]: fromUser.State;
  [fromAccount.accountsFeatureKey]: fromAccount.State;
  [fromApp.appsFeatureKey]: fromApp.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromUser.usersFeatureKey]: fromUser.reducer,
  [fromAccount.accountsFeatureKey]: fromAccount.reducer,
  [fromApp.appsFeatureKey]: fromApp.reducer,
};
