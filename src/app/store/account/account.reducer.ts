import {createReducer} from "@ngrx/store";
import {IAccount} from "../../model/accounts.model";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";

export const accountsFeatureKey = 'accounts';

export interface State extends EntityState<IAccount> {

}

export const adapter: EntityAdapter<IAccount> = createEntityAdapter<IAccount>();

export const initialState: State = adapter.getInitialState({});

export const reducer = createReducer(
  initialState
);
