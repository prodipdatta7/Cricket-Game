import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {ServiceService} from 'src/app/services/service.service';
import {TeamSelectionDialogComponent} from '../team-selection-dialog/team-selection-dialog.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  disabled = true;
  teamCounter = 0;
  allTeams: any = [];
  selectedTeamsID: number[] = [];
  ChoosedFavouredTeam = false;

  constructor(
    private dataStore: ServiceService,
    private router: Router,
    private dialog: MatDialog,
  ) {
    this.allTeams = dataStore.allTeams;
    console.log(this.allTeams);
  }

  private updateState(team: any): void {
    // tslint:disable-next-line:triple-equals
    if (team.isSelected === 1) {
      if (this.teamCounter === 2) {
        alert('You can Select exactly 2 teams');
        team.isSelected ^= 1 ;
      } else {
        ++this.teamCounter;
        this.selectedTeamsID.push(team.ID);
      }
    } else {
      --this.teamCounter;
      this.selectedTeamsID.splice(this.selectedTeamsID.indexOf(team.ID), 1);
    }
    this.disabled = this.teamCounter !== 2;
    console.log(this.teamCounter, team.ID);
  }

  // tslint:disable-next-line:typedef
  chooseFavouredTeam() {
  }

  // tslint:disable-next-line:typedef
  Submit() {
    this.dataStore.setPlayingTeam(this.selectedTeamsID);
    const dialogRef = this.dialog.open(TeamSelectionDialogComponent, {
      width: '550px',
      data: [...this.dataStore.teamsInQueue]
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
    // this.router.navigate(['home', 'toss']);
  }

  // tslint:disable-next-line:typedef
  toggleChecked(team: any) {
    // tslint:disable-next-line:no-bitwise
    team.isSelected ^= 1 ;
    this.updateState(team);
  }

  ngOnInit(): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0 ; i < this.allTeams.length ; ++i) {
      this.allTeams[i].isSelected = 0 ;
    }
  }
}
