import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

interface DialogData{}

@Component({
  selector: 'app-team-selection-dialog',
  templateUrl: './team-selection-dialog.component.html',
  styleUrls: ['./team-selection-dialog.component.scss']
})
export class TeamSelectionDialogComponent implements OnInit {

  selectedTeams: any;
  favouriteTeam: string = "";
  constructor(
    public dialogRef: MatDialogRef<TeamSelectionDialogComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    this.selectedTeams = this.data;
  }

  onSave() {
    this.onCancel();
    this.router.navigate(['home', 'players']);
  }

  onCancel() {
    this.dialogRef.close();
  }

}
