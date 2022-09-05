import { Component, OnInit } from '@angular/core';
import { IUser } from '../../model/users.model';
import { Observable } from 'rxjs';
import * as UsersSelector from '../../store/user/user.selectors';
import * as UsersAction from '../../store/user/user.actions';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  users$: Observable<IUser[]>;

  constructor(private store: Store) {
    this.users$ = this.store.select(UsersSelector.selectAllUsers);
  }

  ngOnInit(): void {
    this.store.dispatch(UsersAction.loadUserList());
  }

}
