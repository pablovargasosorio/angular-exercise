import { Component, OnInit } from '@angular/core';
import { IAccount } from '../../model/accounts.model';
import { AccountsService } from '../../services/accounts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accounts-page',
  templateUrl: './accounts-page.component.html',
  styleUrls: ['./accounts-page.component.scss']
})
export class AccountsPageComponent implements OnInit {

  // TODO List should be provided by NgRx selector
  accounts$!: Observable<IAccount[]>;

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.accounts$ = this.accountsService.getList();
  }

}
