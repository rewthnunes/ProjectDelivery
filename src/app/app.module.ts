import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { CarouselModule } from 'primeng/carousel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SplitButtonModule } from 'primeng/splitbutton';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pokemon-menu/menu.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MessageService } from 'primeng/api';
import { PokemonCityComponent } from './pokemon-city/pokemon-city.component';
import { PokemonHelpComponent } from './pokemon-help/pokemon-help.component';
import { PokemonMapComponent } from './pokemon-map/pokemon-map.component';
import { PokemonIndexComponent } from './pokemon-index/pokemon-index.component';

import { GMapModule } from 'primeng/gmap';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PokemonListComponent,
    PokemonCityComponent,
    PokemonHelpComponent,
    PokemonMapComponent,
    PokemonIndexComponent
  ],
  imports: [
    BrowserModule,
    routing,
    TabMenuModule,
    CarouselModule,
    PanelMenuModule,
    GMapModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }


