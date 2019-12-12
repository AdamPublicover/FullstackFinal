import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinGameScreenComponent } from './join-game-screen.component';

describe('JoinGameScreenComponent', () => {
  let component: JoinGameScreenComponent;
  let fixture: ComponentFixture<JoinGameScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinGameScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinGameScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
