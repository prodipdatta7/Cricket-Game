import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../../services/service.service';

@Component({
    selector: 'app-squads',
    templateUrl: './squads.component.html',
    styleUrls: ['./squads.component.scss']
})
export class SquadsComponent implements OnInit {
    myTeam = '';
    opponentTeam = '';
    over = 0;
    myTeamPlayers: string[] = [];
    opponentTeamPlayers: string[] = [];
    tossWinner = '';
    startingOption = '';
    constructor(
        public service: ServiceService
    ) {
    }

    ngOnInit(): void {
        this.myTeam = this.service.teamsInQueue[0].name;
        this.opponentTeam = this.service.teamsInQueue[1].name;
        this.over = this.service.Over;
        this.myTeamPlayers = this.service.getPlayerList(this.service.teamsInQueue[0].ID);
        this.opponentTeamPlayers = this.service.getPlayerList(this.service.teamsInQueue[1].ID);
        this.tossWinner = this.service.teamsInQueue[this.service.tossWinnerID].name;
        this.startingOption = this.service.choosenOption;
        debugger;
    }

}
