import {Component, Input, OnInit} from '@angular/core';
import {IAccount} from "../../../model/accounts.model";

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent implements OnInit {

  @Input()
  account!: IAccount;

  constructor() { }

  ngOnInit(): void {
  }

}
