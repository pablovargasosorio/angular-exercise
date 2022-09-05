import {createAction, props} from '@ngrx/store';
import {IUser} from "../../model/users.model";

export const loadUserList = createAction(
  '[Users Page] Load User List',
);

export const loadUserListSuccess = createAction(
  '[Users Page] Load User List Success',
  props<{ results: IUser[] }>()
);

export const loadUserListFailure = createAction(
  '[Users Page] Load User List Failure',
  props<{ error: any }>()
);
