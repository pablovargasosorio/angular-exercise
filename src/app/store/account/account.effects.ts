import { Injectable } from '@angular/core';
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as AccountActions from "./account.actions";
import {IAccount} from "../../model/accounts.model";
import {AccountsService} from "../../services/accounts.service";

@Injectable()
export class AccountEffects {
  loadAccountList$: Observable<{ results: IAccount[] } | { error: any }> = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Accounts Page] Load Account List'),
      mergeMap(() => {
        return this.accountsService.getList().pipe(
          map((response: any) => {
            return AccountActions.loadAccountListSuccess({ results: response });
          }),
          catchError((error) => {
            return of(AccountActions.loadAccountListFailure({ error }));
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private accountsService: AccountsService) {}
}
