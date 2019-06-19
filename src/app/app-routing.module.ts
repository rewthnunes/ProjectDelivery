import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { from } from 'rxjs';
import { PokemonHelpComponent } from './pokemon-help/pokemon-help.component';
import { PokemonCityComponent } from './pokemon-city/pokemon-city.component';
import { PokemonMapComponent } from './pokemon-map/pokemon-map.component';
import { PokemonIndexComponent } from './pokemon-index/pokemon-index.component';

const routes: Routes = [  
  { path: '', component: PokemonIndexComponent },
  { path: 'help', component: PokemonHelpComponent },
  { path: 'list', component: PokemonListComponent },
  { path: 'city', component: PokemonCityComponent },
  { path: 'map', component: PokemonMapComponent },
  ];

export const routing = RouterModule.forRoot(routes);
