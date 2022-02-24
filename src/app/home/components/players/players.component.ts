import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  myTeam: string = "" ;
  opponentTeam: string = "" ;
  over: number = 0
  myTeamPlayers: string[] = [] ; 
  opponentTeamPlayers: string[] = [] ;

  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.service.Over === 0){
      this.router.navigate(['home/teams']);
    }
    this.myTeam = this.service.teamsInQueue[0].name;
    this.opponentTeam = this.service.teamsInQueue[1].name;
    this.over = this.service.Over ;
    this.myTeamPlayers = this.service.getPlayerList(this.service.teamsInQueue[0].ID);
    this.opponentTeamPlayers = this.service.getPlayerList(this.service.teamsInQueue[1].ID);
    this.service.myTeamPlayers = this.myTeamPlayers ; 
    this.service.opponentTeamPlayers = this.opponentTeamPlayers;
  }

  navigateToToss(){
    this.router.navigate(['home/toss']) ;
  }

}
