import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // TODO Nice to be a generic class, so we don't need to use 'any' as a type
  protected mock: any[] = [];

  constructor() { }

  getList(from: number, to: number): Observable<any> {
    return of(this.mock.slice(from, to));
  }
}
