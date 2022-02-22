import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})
export class MatchDetailsComponent implements OnInit {

  matchID: any = "";
  matchRecords: any[] = [];
  currentMatchRecord: any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.matchID = id;
    });
    var Records = localStorage.getItem('matchStory');
    if (Records) {
      this.matchRecords = JSON.parse(Records);
    }
    let LENGTH = this.matchRecords.length;
    for (let i = 0; i < LENGTH; ++i) {
      if (this.matchID === this.matchRecords[i].matchID) {
        this.currentMatchRecord = this.matchRecords[i];
        break;
      }
    }
  }

}
