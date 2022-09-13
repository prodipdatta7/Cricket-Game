/* tslint:disable */
import { Injectable } from '@angular/core';
import { FiveOversMatchService } from './five-overs-match.service';
import { TenOversMatchService } from './ten-overs-match.service';
import { TwoOversMatchService } from './two-overs-match.service';

const allTeams = [
  {
    ID: 0,
    name: 'Bangladesh',
    flag_url: 'assets/images/BAN.png',
    isSelected: 0
  },
  {
    ID: 1,
    name: "Afghanistan",
    flag_url: "assets/images/AFG.png",
    isSelected: 0
  },
  {
    ID: 2,
    name: "India",
    flag_url: "assets/images/IND.png",
    isSelected: 0
  },
  {
    ID: 3,
    name: "Pakistan",
    flag_url: "assets/images/PAK.png",
    isSelected: 0
  },
  {
    ID: 4,
    name: "Sri Lanka",
    flag_url: "assets/images/SL.png",
    isSelected: 0
  },
  {
    ID: 5,
    name: "Australia",
    flag_url: "assets/images/AUS.png",
    isSelected: 0
  },
  {
    ID: 6,
    name: "South Africa",
    flag_url: "assets/images/RSA.png",
    isSelected: 0
  },
  {
    ID: 7,
    name: "New Zealand",
    flag_url: "assets/images/NZ.png",
    isSelected: 0
  },
  {
    ID: 8,
    name: "England",
    flag_url: "assets/images/ENG.png",
    isSelected: 0
  },
  {
    ID: 9,
    name: "West Indies",
    flag_url: "assets/images/WI.png",
    isSelected: 0
  },
];

export interface simpleData {
  matchID: string,
  team1: string,
  team2: string,
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  teamsInQueue: any = [];
  tossWinnerID = 0;
  BattingTeamID = 0;
  BowlingTeamID = 0;
  allTeams: any = allTeams;
  playedMatches: any = [];
  currentMatchID: any;
  myTeamID = -1 ;
  myTeamPlayers: any[] = [];
  opponentTeamPlayers: any[] = [];
  opponentTeamID = -1;
  Over = 0;
  serviceHolder: any ;

  constructor(
    private service2: TwoOversMatchService,
    private service5: FiveOversMatchService,
    private service10: TenOversMatchService
    ) {}
  prepareMatch(selectedTeams: any[], overs: number): void {
    this.myTeamID = selectedTeams[0].ID ;
    this.opponentTeamID = selectedTeams[1].ID ;
    this.Over = overs;
    this.getCurrentMatchID() ;
    this.setServiceHolder();
    this.teamsInQueue = selectedTeams;
  }
  getPlayerList(ID: number): any {
    const players: any[] = [] ;
    if (this.Over === 2){
      const LIST = this.service2.getPlayerList(ID);
      for (const value of Object.values(LIST)) {
        players.push(value);
      }
    }
    else if (this.Over === 5) {
      const LIST = this.service5.getPlayerList(ID);
      for(const value of Object.values(LIST)) {
        players.push(value);
      }
    }
    else if (this.Over === 10) {
      const LIST = this.service10.getPlayerList(ID);
      for (const value of Object.values(LIST)) {
        players.push(value);
      }
    }
    if (players.length > 2){
      players.pop() ;
      players.pop() ;
    }
    return players;
  }
  setServiceHolder(): void {
    if(this.Over === 2)this.serviceHolder = this.service2;
    else if(this.Over === 5)this.serviceHolder = this.service5;
    else this.serviceHolder = this.service10;
    const team = this.serviceHolder.TeamPlayers;
    debugger;
  }
  setPlayingTeam(teams: any): void {
    console.log(teams)
    this.teamsInQueue = [];
    this.teamsInQueue.push(this.allTeams[teams[0]]);
    this.teamsInQueue.push(this.allTeams[teams[1]]);
  }
  setTossWinner(id: number): void {
    this.tossWinnerID = id;
  }

  setBattingTeam(ID: number): void {
    this.BattingTeamID = ID;
  }
  setBowlingTeam(ID: number): void {
    this.BowlingTeamID = ID;
  }
  createGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      // tslint:disable-next-line:one-variable-per-declaration
      let r: number, v: number;
      // tslint:disable-next-line:no-bitwise
      r = (Math.random() << 4) | 0;
      // tslint:disable-next-line:no-bitwise
      v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  getCurrentMatchID(): void {
    this.currentMatchID = this.createGuid();
  }

  recordCurrentMatch(): void {
    const newMatch = {
      matchID: this.currentMatchID,
      tossWinner: allTeams[this.tossWinnerID].name,
      firstBattingTeam: allTeams[this.BattingTeamID].name,
      draw: true,
      winner: '',
      looser: '',
      winnerTeamsRun: [],
      looserTeamsRun: [],
    };
  }

  showData(): void {
    console.log('batting Team ID: ' + this.BattingTeamID);
    console.log('bowling Team ID: ' + this.BowlingTeamID);
  }
}

