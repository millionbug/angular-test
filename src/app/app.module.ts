import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { RegisterAccountComponent } from './register-account/register-account.component';
import { ReactiveRegisterComponent } from './reactive-register/reactive-register.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from '../directive/dropmenu/dropmenu.directive';
import { DropdownTriggerDirective } from '../directive/dropmenuTrigger/dropmenuTrigger.directive';
import { CITestComponent } from './citest/citest.component';
import { HostChildDirective } from '../directive/testHostApi/testHostApiChild.directive'
import { HostParentDirective } from '../directive/testHostApi/testHostApiParent.directive';
import { RxjsTestComponent } from './rxjs-test/rxjs-test.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    RegisterAccountComponent,
    ReactiveRegisterComponent,
    HeaderComponent,
    DropdownDirective,
    DropdownTriggerDirective,
    CITestComponent,
    HostChildDirective,
    HostParentDirective,
    RxjsTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
