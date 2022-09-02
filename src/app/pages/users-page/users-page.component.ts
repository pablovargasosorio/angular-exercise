import { Component, OnInit } from '@angular/core';
import { IUser } from '../../model/users.model';
import { Observable } from 'rxjs';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  // TODO List should be provided by NgRx selector
  users$!: Observable<IUser[]>;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users$ = this.usersService.getList();
  }

}
