import {createReducer, on} from "@ngrx/store";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {IApp} from "../../model/apps.model";
import * as AppActions from './app.actions';

export const appsFeatureKey = 'apps';

export interface State extends EntityState<IApp> {

}

export const adapter: EntityAdapter<IApp> = createEntityAdapter<IApp>();

export const initialState: State = adapter.getInitialState({});

export const reducer = createReducer(
  initialState,
  on(AppActions.loadAppListSuccess, (state, action) => {
    return adapter.setAll(action.results, state);
  }),
);

export const {
  selectAll,
} = adapter.getSelectors();
