import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { GridComponent } from './components/grid/grid.component';
import { AccountsPageComponent } from './pages/accounts-page/accounts-page.component';
import { AppsPageComponent } from './pages/apps-page/apps-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    AccountsPageComponent,
    AppsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
