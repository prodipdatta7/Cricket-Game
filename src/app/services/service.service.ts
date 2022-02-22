import { Injectable } from '@angular/core';

const allTeams = [
  {
    ID: 0,
    name: "Bangladesh",
    flag_url: "assets/images/BAN.png",
  },
  {
    ID: 1,
    name: "Afghanistan",
    flag_url: "assets/images/AFG.png",
  },
  {
    ID: 2,
    name: "India",
    flag_url: "assets/images/IND.png",
  },
  {
    ID: 3,
    name: "Pakistan",
    flag_url: "assets/images/PAK.png",
  },
  {
    ID: 4,
    name: "Sri Lanka",
    flag_url: "assets/images/SL.png",
  },
  {
    ID: 5,
    name: "Australia",
    flag_url: "assets/images/AUS.png",
  },
  {
    ID: 6,
    name: "South Africa",
    flag_url: "assets/images/RSA.png",
  },
  {
    ID: 7,
    name: "New Zealand",
    flag_url: "assets/images/NZ.png",
  },
  {
    ID: 8,
    name: "England",
    flag_url: "assets/images/ENG.png",
  },
  {
    ID: 9,
    name: "West Indies",
    flag_url: "assets/images/WI.png",
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
  tossWinnerID: number = 0;
  BattingTeamID: number = 0;
  BowlingTeamID: number = 0;
  allTeams: any = allTeams;
  playedMatches: any = [];
  currentMatchID: any;

  constructor() {
    console.log("In service: " + this.BattingTeamID, this.BowlingTeamID)
  }
  setPlayingTeam(teams: any) {
    console.log(teams)
    this.teamsInQueue = [];
    this.teamsInQueue.push(this.allTeams[teams[0]]);
    this.teamsInQueue.push(this.allTeams[teams[1]]);
  }
  setTossWinner(id: number) {
    this.tossWinnerID = id;
  }

  setBattingTeam(ID: number) {
    this.BattingTeamID = ID;
  }
  setBowlingTeam(ID: number) {
    this.BowlingTeamID = ID;
  }
  createGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  getCurrentMatchID() {
    this.currentMatchID = this.createGuid();
  }

  recordCurrentMatch() {
    var newMatch = {
      matchID: this.currentMatchID,
      tossWinner: allTeams[this.tossWinnerID].name,
      firstBattingTeam: allTeams[this.BattingTeamID].name,
      draw: true,
      winner: '',
      looser: '',
      winnerTeamsRun: [],
      looserTeamsRun: [],
    }
  }

  showData() {
    console.log("batting Team ID: " + this.BattingTeamID);
    console.log("bowling Team ID: " + this.BowlingTeamID);
  }
}
