import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlayerAdminScreenComponent } from './edit-player-admin-screen.component';

describe('EditPlayerAdminScreenComponent', () => {
  let component: EditPlayerAdminScreenComponent;
  let fixture: ComponentFixture<EditPlayerAdminScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlayerAdminScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlayerAdminScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
