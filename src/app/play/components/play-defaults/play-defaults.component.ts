import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewMatch } from 'src/app/Interfaces/new-match';
import { ServiceService } from './../../../services/service.service';
import { SimpleData } from './../../../Interfaces/simple-data';

@Component({
  selector: 'app-play-defaults',
  templateUrl: './play-defaults.component.html',
  styleUrls: ['./play-defaults.component.scss']
})
export class PlayDefaultsComponent implements OnInit {

  playingTeams: any = [];
  tossWinnerID = 0;
  tossWinnerName = '';
  battingTeamID = 0;
  playingOptions = ['bowl', 'bat'];
  possibleRun: number[] = [1, 2, 3, 4, 6];
  tossWinnerBattingFirst = 0;
  currentTotalRun = 0;
  currentBallRun = 0;
  totalBallPlayed = 0;
  offSet = 0;
  today: number = Date.now();
  public currentMatchInfo: NewMatch;
  Balls: any = [];
  firstInningsFinish = false;
  secondInningsFinish = false;
  battingTeamName = '';
  bowlingTeamName = '';
  disabled = false;

  constructor(private service: ServiceService, private router: Router) {
    this.playingTeams = service.teamsInQueue;
    this.tossWinnerID = service.tossWinnerID;
    this.battingTeamID = service.BattingTeamID;
    this.tossWinnerName = service.allTeams[this.tossWinnerID].name;
    this.tossWinnerBattingFirst = (this.battingTeamID == this.tossWinnerID) ? 1 : 0;
    this.battingTeamName = service.allTeams[service.BattingTeamID].name;
    this.bowlingTeamName = service.allTeams[service.BowlingTeamID].name;
    console.log(this.playingTeams, this.tossWinnerID);
    console.log(this.battingTeamName, this.bowlingTeamName, this.tossWinnerName);
    this.currentMatchInfo = {
      matchID: service.currentMatchID,
      tossWinner: this.tossWinnerName,
      electedTo: this.playingOptions[this.tossWinnerBattingFirst],
      draw: false,
      winner: '',
      looser: '',
      firstInnings: [],
      secondInnings: [],
      winnersTotalRun: 0,
      loosersTotalRun: 0,
      winnersInnings: [],
      loosersInnings: [],
      totalRunsInFirstInnings: 0,
      totalRunsInSecondInnings: 0,
      Result: 'Match Drawn',
      toDay: 0,
    };
    console.log(this.today);
    service.showData();
  }

  // tslint:disable-next-line:typedef
  IncreaseRun() {
    const index = Math.floor(Math.random() * 10) % 5;
    this.currentTotalRun += this.possibleRun[index];
    this.currentBallRun = this.possibleRun[index];
    ++this.totalBallPlayed;
    const newBall = {
      over: 0.1,
      run: this.currentBallRun,
    };
    if (this.totalBallPlayed - this.offSet > 6) {
      newBall.over = (this.totalBallPlayed - this.offSet - 6) / 10;
      newBall.over += 1;
    }
    else {
      newBall.over = (this.totalBallPlayed - this.offSet) / 10;
    }
    this.Balls.push(newBall);
    console.log(this.Balls);

    if (this.totalBallPlayed === 12) {
      this.currentMatchInfo.firstInnings = this.Balls;
      this.currentMatchInfo.totalRunsInFirstInnings = this.currentTotalRun;
      this.currentTotalRun = 0;
      this.Balls = [];
      this.firstInningsFinish = true;
      if (!this.offSet) {
        const name = this.battingTeamName;
        this.battingTeamName = this.bowlingTeamName;
        this.bowlingTeamName = name;
      }
      this.offSet = 12;
    }
    if (this.totalBallPlayed === 24) {
      this.currentMatchInfo.totalRunsInSecondInnings = this.currentTotalRun;
      this.currentMatchInfo.secondInnings = this.Balls;
      if (this.currentMatchInfo.totalRunsInFirstInnings === this.currentMatchInfo.totalRunsInSecondInnings) {
        this.currentMatchInfo.draw = true;
      }
      else {
        if (this.currentMatchInfo.totalRunsInFirstInnings > this.currentMatchInfo.totalRunsInSecondInnings) {
          this.currentMatchInfo.winner = this.bowlingTeamName;
          this.currentMatchInfo.looser = this.battingTeamName;
          this.currentMatchInfo.winnersTotalRun = this.currentMatchInfo.totalRunsInFirstInnings;
          this.currentMatchInfo.loosersTotalRun = this.currentMatchInfo.totalRunsInSecondInnings;
        }
        else {
          this.currentMatchInfo.winner = this.battingTeamName;
          this.currentMatchInfo.looser = this.bowlingTeamName;
          this.currentMatchInfo.winnersTotalRun = this.currentMatchInfo.totalRunsInSecondInnings;
          this.currentMatchInfo.loosersTotalRun = this.currentMatchInfo.totalRunsInFirstInnings;
        }
      }
      this.currentMatchInfo.Result = `${this.currentMatchInfo.winner} won the match`;
      if (this.currentMatchInfo.tossWinner === this.currentMatchInfo.winner) {
        if (this.currentMatchInfo.electedTo === 'ball') {
          this.currentMatchInfo.winnersInnings = this.currentMatchInfo.secondInnings;
          this.currentMatchInfo.loosersInnings = this.currentMatchInfo.firstInnings;
        }
        else {
          this.currentMatchInfo.winnersInnings = this.currentMatchInfo.firstInnings;
          this.currentMatchInfo.loosersInnings = this.currentMatchInfo.secondInnings;
        }
      }
      else {
        if (this.currentMatchInfo.electedTo === 'bat') {
          this.currentMatchInfo.winnersInnings = this.currentMatchInfo.secondInnings;
          this.currentMatchInfo.loosersInnings = this.currentMatchInfo.firstInnings;
        }
        else {
          this.currentMatchInfo.winnersInnings = this.currentMatchInfo.firstInnings;
          this.currentMatchInfo.loosersInnings = this.currentMatchInfo.secondInnings;
        }
      }
      this.currentMatchInfo.toDay = this.today;
      this.currentTotalRun = 0;
      this.disabled = true;
      this.secondInningsFinish = true;
      let matchRecords: NewMatch[] = [];
      let shortMatchRecords: SimpleData[] = [];
      const Records = localStorage.getItem('matchStory');
      const shortRecords = localStorage.getItem('simpleData');
      if (Records) {
        matchRecords = JSON.parse(Records);
      }
      if (shortRecords) {
        shortMatchRecords = JSON.parse(shortRecords);
      }
      matchRecords.push(this.currentMatchInfo);
      shortMatchRecords.push({
        matchID: this.currentMatchInfo.matchID,
        team1: this.currentMatchInfo.winner,
        team2: this.currentMatchInfo.looser
      }) ;
      console.log(shortMatchRecords);
      localStorage.setItem('matchStory', JSON.stringify(matchRecords));
      localStorage.setItem('simpleData', JSON.stringify(shortMatchRecords));
      console.log(this.currentMatchInfo);
    }
  }

  ngOnInit(): void {
  }

}
