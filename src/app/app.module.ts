import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule  } from "@angular/forms";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuHomeComponent,
    HeroesComponent,
    HeroDetailComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
