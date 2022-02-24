import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

interface DialogData{}

@Component({
  selector: 'app-team-selection-dialog',
  templateUrl: './team-selection-dialog.component.html',
  styleUrls: ['./team-selection-dialog.component.scss']
})
export class TeamSelectionDialogComponent implements OnInit {

  selectedTeams: any;
  favouriteTeam: string = "Not Marked Yet";
  overs: number = 0;
  OVER: number[] = [2, 5, 10];
  constructor(
    public dialogRef: MatDialogRef<TeamSelectionDialogComponent>,
    private router: Router,
    private service: ServiceService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    this.selectedTeams = this.data;
  }

  onSave() {
    this.onCancel();
    if(this.selectedTeams[1].name === this.favouriteTeam){
      const val = this.selectedTeams[0] ; 
      this.selectedTeams[0] = this.selectedTeams[1] ;
      this.selectedTeams[1] = val ; 
    }
    // debugger;
    this.service.prepareMatch(this.selectedTeams, this.overs);
    this.router.navigate(['home', 'players']);
  }

  onCancel() {
    this.dialogRef.close();
  }

}
