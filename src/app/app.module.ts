import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { GridComponent } from './components/grid/grid.component';
import { AccountsPageComponent } from './pages/accounts-page/accounts-page.component';
import { AppsPageComponent } from './pages/apps-page/apps-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { EffectsModule } from '@ngrx/effects';
import * as fromApp from './store/app/app.reducer';
import * as fromAccount from './store/account/account.reducer';
import * as fromUser from './store/user/user.reducer';
import { AppEffects } from './store/app/app.effects';
import { AccountEffects } from './store/account/account.effects';
import { UserEffects } from './store/user/user.effects';
import { AppCardComponent } from './components/cards/app-card/app-card.component';
import { UserCardComponent } from './components/cards/user-card/user-card.component';
import { AccountCardComponent } from './components/cards/account-card/account-card.component';
import { TemplateDefDirective } from './directives/template-ref.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDefDirective,
    GridComponent,
    AccountsPageComponent,
    AppsPageComponent,
    UsersPageComponent,
    MenuComponent,
    AppCardComponent,
    UserCardComponent,
    AccountCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(fromApp.appsFeatureKey, fromApp.reducer),
    StoreModule.forFeature(fromAccount.accountsFeatureKey, fromAccount.reducer),
    StoreModule.forFeature(fromUser.usersFeatureKey, fromUser.reducer),
    EffectsModule.forFeature([AppEffects, AccountEffects, UserEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
