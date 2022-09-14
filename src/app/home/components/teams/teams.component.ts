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

    constructor(
        private dataStore: ServiceService,
        private router: Router,
        private dialog: MatDialog,
    ) {}

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
        team.isSelected ^= 1;
        this.updateState(team);
    }

    ResetSelection(): void {
        this.allTeams.forEach((team: any) => {
            team.isSelected = 0;
        });
        this.selectedTeamsID = [];
        this.teamCounter = 0;
    }

    ngOnInit(): void {
        // tslint:disable-next-line:prefer-for-of
        this.allTeams = this.dataStore.allTeams;
        for (let i = 0; i < this.allTeams.length; ++i) {
            this.allTeams[i].isSelected = 0;
        }
    }

    private updateState(team: any): void {
        // tslint:disable-next-line:triple-equals
        if (team.isSelected === 1) {
            if (this.teamCounter === 2) {
                alert('You can Select exactly 2 teams');
                team.isSelected ^= 1;
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
}
