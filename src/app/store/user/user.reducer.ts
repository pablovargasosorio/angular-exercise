import {createReducer, on} from "@ngrx/store";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {IUser} from "../../model/users.model";
import * as UserActions from "./user.actions";

export const usersFeatureKey = 'users';

export interface State extends EntityState<IUser> {

}

export const adapter: EntityAdapter<IUser> = createEntityAdapter<IUser>();

export const initialState: State = adapter.getInitialState({});

export const reducer = createReducer(
  initialState,
  on(UserActions.loadUserListSuccess, (state, action) => {
    return adapter.setAll(action.results, state);
  }),
);

export const {
  selectAll,
} = adapter.getSelectors();
