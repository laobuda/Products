import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {ProductList} from './productList';
import {Header} from './header';
import { HttpModule, JsonpModule} from '@angular/http';
import {Pipe, PipeTransform} from '@angular/core';
import {KeysPipe} from './KeysPipe';
import {Home} from './home';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTER_PROVIDERS } from './app.routes';
@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule],
  declarations: [ AppComponent, ProductList, Header, KeysPipe, Home ],
  providers : [ProductList],
  bootstrap: [ AppComponent, [APP_ROUTER_PROVIDERS]]
})
export class AppModule { }
