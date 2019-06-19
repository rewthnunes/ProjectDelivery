import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCityComponent } from './pokemon-city.component';

describe('PokemonCityComponent', () => {
  let component: PokemonCityComponent;
  let fixture: ComponentFixture<PokemonCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
