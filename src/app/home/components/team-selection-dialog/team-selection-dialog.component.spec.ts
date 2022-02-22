import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSelectionDialogComponent } from './team-selection-dialog.component';

describe('TeamSelectionDialogComponent', () => {
  let component: TeamSelectionDialogComponent;
  let fixture: ComponentFixture<TeamSelectionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamSelectionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
