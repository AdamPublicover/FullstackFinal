import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRankingScreenComponent } from './player-ranking-screen.component';

describe('PlayerRankingScreenComponent', () => {
  let component: PlayerRankingScreenComponent;
  let fixture: ComponentFixture<PlayerRankingScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerRankingScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerRankingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
