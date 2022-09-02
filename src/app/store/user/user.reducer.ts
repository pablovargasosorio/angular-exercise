import {createReducer} from "@ngrx/store";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {IUser} from "../../model/users.model";

export const usersFeatureKey = 'users';

export interface State extends EntityState<IUser> {

}

export const adapter: EntityAdapter<IUser> = createEntityAdapter<IUser>();

export const initialState: State = adapter.getInitialState({});

export const reducer = createReducer(
  initialState
);
