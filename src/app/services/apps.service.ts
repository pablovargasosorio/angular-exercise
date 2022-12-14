import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { appsMock } from '../model/apps.mock';

@Injectable({
  providedIn: 'root'
})
export class AppsService extends ApiService {

  constructor() {
    super();
    this.mock = appsMock;
  }
}
