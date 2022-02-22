import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { TeamSelectionDialogComponent } from '../team-selection-dialog/team-selection-dialog.component';

@Component({
    selector: 'app-teams',
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
    disabled: boolean = true;
    teamCounter: number = 0;
    allTeams: any = [];
    selectedTeamsID: number[] = [];
    ChoosedFavouredTeam: boolean = false;

    constructor(
        private dataStore: ServiceService,
        private router: Router,
        private dialog: MatDialog,
        ) {
        this.allTeams = dataStore.allTeams;
        console.log(this.allTeams);
    }

    updateState(event: any, ID: number) {
        if (event.checked == true) {
            if (this.teamCounter == 2) {
                alert('You can Select exactly 2 teams');
            } else {
                ++this.teamCounter;
                this.selectedTeamsID.push(ID);
            }
        } else {
            --this.teamCounter;
            this.selectedTeamsID.splice(this.selectedTeamsID.indexOf(ID), 1);
        }
        this.disabled = this.teamCounter !== 2;
        console.log(this.teamCounter, ID);
    }

    chooseFavouredTeam() { }

    Submit() {
        this.dataStore.setPlayingTeam(this.selectedTeamsID);
        let dialogRef = this.dialog.open(TeamSelectionDialogComponent, {
            width: '550px',
            data: [...this.dataStore.teamsInQueue]
        });
        dialogRef.afterClosed().subscribe(res => {
            console.log(res);
        })
        // this.router.navigate(['home', 'toss']);
    }

    ngOnInit(): void { }
}
