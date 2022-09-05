import { Component, OnInit } from '@angular/core';
import { IAccount } from '../../model/accounts.model';
import * as AccountsSelector from '../../store/account/account.selectors';
import * as AccountAction from '../../store/account/account.actions';
import { Observable } from 'rxjs';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-accounts-page',
  templateUrl: './accounts-page.component.html',
  styleUrls: ['./accounts-page.component.scss']
})
export class AccountsPageComponent implements OnInit {

  accounts$: Observable<IAccount[]>;

  constructor(private store: Store) {
    this.accounts$ = this.store.select(AccountsSelector.selectAllAccounts);
  }

  ngOnInit(): void {
    this.store.dispatch(AccountAction.loadAccountList());
  }

}
