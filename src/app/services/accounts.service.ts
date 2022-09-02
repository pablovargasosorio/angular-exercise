import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { accountsMock } from '../model/accounts.mock';

@Injectable({
  providedIn: 'root'
})
export class AccountsService extends ApiService {

  constructor() {
    super();
    this.mock = accountsMock;
  }
}
