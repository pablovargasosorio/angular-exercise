import {createAction, props} from '@ngrx/store';
import {IApp} from "../../model/apps.model";

export const loadAppList = createAction(
  '[Apps Page] Load App List',
);

export const loadAppListSuccess = createAction(
  '[Apps Page] Load App List Success',
  props<{ results: IApp[] }>()
);

export const loadAppListFailure = createAction(
  '[Apps Page] Load App List Failure',
  props<{ error: any }>()
);
