import {createReducer, on} from "@ngrx/store";
import {IAccount} from "../../model/accounts.model";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import * as AccountActions from "./account.actions";

export const accountsFeatureKey = 'accounts';

export interface State extends EntityState<IAccount> {

}

export const adapter: EntityAdapter<IAccount> = createEntityAdapter<IAccount>();

export const initialState: State = adapter.getInitialState({});

export const reducer = createReducer(
  initialState,
  on(AccountActions.loadAccountListSuccess, (state, action) => {
    return adapter.setAll(action.results, state);
  }),
);

export const {
  selectAll,
} = adapter.getSelectors();
