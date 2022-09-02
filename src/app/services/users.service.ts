import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { usersMock } from '../model/users.mock';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiService {

  constructor() {
    super();
    this.mock = usersMock;
  }
}
