import {createReducer} from "@ngrx/store";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {IApp} from "../../model/apps.model";

export const appsFeatureKey = 'apps';

export interface State extends EntityState<IApp> {

}

export const adapter: EntityAdapter<IApp> = createEntityAdapter<IApp>();

export const initialState: State = adapter.getInitialState({});

export const reducer = createReducer(
  initialState
);
