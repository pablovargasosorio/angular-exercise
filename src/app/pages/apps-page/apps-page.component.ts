import { Component, OnInit } from '@angular/core';
import { IApp } from '../../model/apps.model';
import { Observable } from 'rxjs';
import { AppsService } from '../../services/apps.service';

@Component({
  selector: 'app-apps-page',
  templateUrl: './apps-page.component.html',
  styleUrls: ['./apps-page.component.scss']
})
export class AppsPageComponent implements OnInit {

  // TODO List should be provided by NgRx selector
  apps$!: Observable<IApp[]>;

  constructor(private appsService: AppsService) { }

  ngOnInit(): void {
    this.apps$ = this.appsService.getList();
  }

}
