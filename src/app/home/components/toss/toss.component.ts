import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from 'src/app/services/service.service';

@Component({
    selector: 'app-toss',
    templateUrl: './toss.component.html',
    styleUrls: ['./toss.component.scss']
})
export class TossComponent implements OnInit {

    playingTeams: any[] = [];
    disabled = true;
    diceRolled = false;
    bowlingTeamID: any;
    tossWinner = 0;
    firstTeamsCall = '';
    tossValue = '';
    tossOptions: string[] = ['Head', 'Tail'];
    MyChosenSide = 'Not Decided Yet';
    CoinSides: string[] = ['Head', 'Tail'];
    StartingOptions: string[] = ['Bat', 'Bowl'];
    MyStartingOption = '';
    opponentsStartingOption = '';
    tossButtonClicked = false;

    constructor(public data: ServiceService, private router: Router) {
    }

    teamToBowl(): void {
        if (this.MyStartingOption !== '') {
            this.data.tossWinnerID = this.data.teamsInQueue[0].ID;
            if (this.MyStartingOption === 'Bowl') {
                this.bowlingTeamID = this.data.teamsInQueue[0].ID;
                this.data.choosenOption = 'Bowl';
            } else {
                this.bowlingTeamID = this.data.teamsInQueue[1].ID;
                this.data.choosenOption = 'Bat';
            }
        } else {
            this.data.tossWinnerID = this.data.teamsInQueue[0].ID;
            if (this.opponentsStartingOption === 'Bowl') {
                this.bowlingTeamID = this.data.teamsInQueue[1].ID;
                this.data.choosenOption = 'Bowl';
            } else {
                this.bowlingTeamID = this.data.teamsInQueue[0].ID;
                this.data.choosenOption = 'Bat';
            }
        }
        this.disabled = false;
    }

    diceRolling(): void {
        this.teamToBowl();
        this.data.setBowlingTeam(this.bowlingTeamID);
        this.diceRolled = true;
        this.firstTeamsCall = this.tossOptions[Math.floor(Math.random() * 10) % 2];
        this.tossValue = this.tossOptions[Math.floor(Math.random() * 10) % 2];
    }

    Play(): void {
        this.diceRolling();
        if (this.tossValue === this.firstTeamsCall) {
            this.tossWinner = this.playingTeams[0].ID;
        } else {
            this.tossWinner = this.playingTeams[1].ID;
        }
        console.log('toss Winner: ' + this.tossWinner)
        this.data.setTossWinner(this.tossWinner);
        let BattingTeamID = 0;
        if (this.bowlingTeamID !== this.tossWinner) {
            BattingTeamID = this.tossWinner;
        } else {
            if (this.tossWinner === this.playingTeams[0].ID) {
                BattingTeamID = this.playingTeams[1].ID;
            } else {
                BattingTeamID = this.playingTeams[0].ID;
            }
        }
        console.log('all ID: ' + BattingTeamID, this.bowlingTeamID)
        this.data.setBattingTeam(BattingTeamID);
        this.data.getCurrentMatchID();
        this.router.navigate(['play/', this.data.currentMatchID]);
    }

    CoinSpinner(): void {
        this.tossButtonClicked = true;
        const instanceOfTimeout = setTimeout(() => {
            const randomNumber = (1 + Math.floor(Math.random() * 10)) % 2;
            this.tossValue = this.CoinSides[randomNumber];
            if (this.tossValue !== this.MyChosenSide) {
                const anotherRand = Math.floor(Math.random() * 10) % 2;
                this.opponentsStartingOption = this.StartingOptions[anotherRand];
            }
            this.tossButtonClicked = false;
        }, 2000);
    }

    ngOnInit(): void {
        this.playingTeams = this.data.teamsInQueue;
    }


}
