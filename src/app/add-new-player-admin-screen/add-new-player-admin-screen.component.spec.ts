import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPlayerAdminScreenComponent } from './add-new-player-admin-screen.component';

describe('AddNewPlayerAdminScreenComponent', () => {
  let component: AddNewPlayerAdminScreenComponent;
  let fixture: ComponentFixture<AddNewPlayerAdminScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewPlayerAdminScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPlayerAdminScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
