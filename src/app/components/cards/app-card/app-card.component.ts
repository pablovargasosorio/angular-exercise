import {Component, Input, OnInit} from '@angular/core';
import {IApp} from "../../../model/apps.model";

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.scss']
})
export class AppCardComponent implements OnInit {

  @Input()
  app!: IApp;

  constructor() { }

  ngOnInit(): void {
  }

}
