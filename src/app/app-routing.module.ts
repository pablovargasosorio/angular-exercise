import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppsPageComponent } from './pages/apps-page/apps-page.component';
import { AccountsPageComponent } from './pages/accounts-page/accounts-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/apps',
    pathMatch: 'full',
  },
  {
    path: 'apps',
    component: AppsPageComponent,
  },
  {
    path: 'accounts',
    component: AccountsPageComponent,
  },
  {
    path: 'users',
    component: UsersPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
