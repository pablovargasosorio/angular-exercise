import { Injectable } from '@angular/core';
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as UserActions from "./user.actions";
import {IUser} from "../../model/users.model";
import {UsersService} from "../../services/users.service";

@Injectable()
export class UserEffects {
  loadUserList$: Observable<{ results: IUser[] } | { error: any }> = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Users Page] Load User List'),
      mergeMap(() => {
        return this.usersService.getList().pipe(
          map((response: any) => {
            return UserActions.loadUserListSuccess({ results: response });
          }),
          catchError((error) => {
            return of(UserActions.loadUserListFailure({ error }));
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private usersService: UsersService) {}
}
