import { Injectable } from '@angular/core';
import {AppsService} from "../../services/apps.service";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {IApp} from "../../model/apps.model";
import * as AppActions from './app.actions';

@Injectable()
export class AppEffects {

  loadAppList$: Observable<{ results: IApp[] } | { error: any }> = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Apps Page] Load App List'),
      mergeMap(() => {
        return this.appsService.getList().pipe(
          map((response: any) => {
            return AppActions.loadAppListSuccess({ results: response });
          }),
          catchError((error) => {
            return of(AppActions.loadAppListFailure({ error }));
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private appsService: AppsService) {}
}
