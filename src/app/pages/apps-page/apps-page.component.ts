import { Component, OnInit } from '@angular/core';
import { IApp } from '../../model/apps.model';
import { Observable } from 'rxjs';
import * as AppsSelector from '../../store/app/app.selectors';
import * as AppsAction from '../../store/app/app.actions';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-apps-page',
  templateUrl: './apps-page.component.html',
  styleUrls: ['./apps-page.component.scss']
})
export class AppsPageComponent implements OnInit {

  apps$: Observable<IApp[]>;

  constructor(private store: Store) {
    this.apps$ = this.store.select(AppsSelector.selectAllApps);
  }

  ngOnInit(): void {
    this.store.dispatch(AppsAction.loadAppList());
  }

}
