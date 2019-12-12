import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerListingAdminScreenComponent } from './player-listing-admin-screen.component';

describe('PlayerListingAdminScreenComponent', () => {
  let component: PlayerListingAdminScreenComponent;
  let fixture: ComponentFixture<PlayerListingAdminScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerListingAdminScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerListingAdminScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
