import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule  } from "@angular/forms";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app--routing/app--routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuHomeComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
