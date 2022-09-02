import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // TODO Nice to be a generic class, so we don't need to use 'any' as a type
  protected mock: any;

  constructor() { }

  getList(): Observable<any> {
    // TODO Emulate 3s backend response time before returning data
    return of(this.mock);
  }
}
