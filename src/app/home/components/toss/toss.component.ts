import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-toss',
  templateUrl: './toss.component.html',
  styleUrls: ['./toss.component.scss']
})
export class TossComponent implements OnInit {

  playingTeams: any = [];
  disabled: boolean = true;
  diceRolled: boolean = false;
  bowlingTeamID: any;
  tossWinner: number = 0;
  firstTeamsCall: string = "";
  tossValue: string = "";
  tossOptions: string[] = ['Head', 'Tail'];
  ChoosedSide: string = "Not Decided Yet";
  Sides: string[] = ['Head', 'Tail'];
  StartingOptions: string[] = ['Bat', 'Bowl'];
  ChoosedStartingOptions: string = "";
  opponentsStartingOption: string = "" ;
  tossButtonClicked: boolean = false;

  constructor(public data: ServiceService, private router: Router) {
    this.playingTeams = data.teamsInQueue;
    console.log(this.playingTeams, this.playingTeams.length)
  }

  teamToBowl(event: any, teamID: number) {
    console.log(event, teamID)
    this.bowlingTeamID = teamID;
    this.disabled = false;
  }

  diceRolling() {
    this.data.setBowlingTeam(this.bowlingTeamID);
    this.diceRolled = true;
    this.firstTeamsCall = this.tossOptions[Math.floor(Math.random() * 10) % 2];
    this.tossValue = this.tossOptions[Math.floor(Math.random() * 10) % 2];
  }

  Play() {
    this.diceRolling();
    if (this.tossValue === this.firstTeamsCall) this.tossWinner = this.playingTeams[0].ID;
    else this.tossWinner = this.playingTeams[1].ID;
    console.log("toss Winner: "+this.tossWinner)
    this.data.setTossWinner(this.tossWinner);
    let BattingTeamID = 0;
    if (this.bowlingTeamID !== this.tossWinner) {
      BattingTeamID = this.tossWinner;
    }
    else {
      if (this.tossWinner === this.playingTeams[0].ID)
        BattingTeamID = this.playingTeams[1].ID;
      else BattingTeamID = this.playingTeams[0].ID;
    }
    console.log("all ID: "+BattingTeamID, this.bowlingTeamID)
    this.data.setBattingTeam(BattingTeamID);
    this.data.getCurrentMatchID();
    this.router.navigate(['play/', this.data.currentMatchID]);
  }

  CoinSpinned() {
    this.tossButtonClicked = true ; 
    const instanceOfTimeout = setTimeout(() =>{
      let randomNumber = (1 + Math.floor(Math.random() * 10)) % 2 ; 
      this.tossValue = this.Sides[randomNumber];
      if(this.tossValue !== this.ChoosedSide)  {
        let anotherRand = Math.floor(Math.random() * 10) % 2 ; 
        this.opponentsStartingOption = this.StartingOptions[anotherRand];
      }
      this.tossButtonClicked = false ;
      debugger;
    }, 2000);
  }

  ngOnInit(): void {
  }


}
