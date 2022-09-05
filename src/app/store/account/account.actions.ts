import {createAction, props} from '@ngrx/store';
import {IAccount} from "../../model/accounts.model";

export const loadAccountList = createAction(
  '[Accounts Page] Load Account List',
);

export const loadAccountListSuccess = createAction(
  '[Accounts Page] Load Account List Success',
  props<{ results: IAccount[] }>()
);

export const loadAccountListFailure = createAction(
  '[Accounts Page] Load Account List Failure',
  props<{ error: any }>()
);
