import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonHelpComponent } from './pokemon-help.component';

describe('PokemonHelpComponent', () => {
  let component: PokemonHelpComponent;
  let fixture: ComponentFixture<PokemonHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
