import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule  } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MenuHomeComponent,
    HeroesComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
