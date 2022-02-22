import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleData } from './../../../Interfaces/simple-data';

@Component({
  selector: 'app-match-list-defaults',
  templateUrl: './match-list-defaults.component.html',
  styleUrls: ['./match-list-defaults.component.scss']
})
export class MatchListDefaultsComponent implements OnInit {

  matchRecords: any[] = [];
  displayedColumns = ['Team-1',' ','Team-2', 'Result'];
  Matches: SimpleData[] = [] ;
  searchText = "" ; 
  constructor(private router: Router) {
    var Records = localStorage.getItem('matchStory');
    var dataRecords = localStorage.getItem('simpleData') ;
    if (Records) {
      this.matchRecords = JSON.parse(Records);
    }
    if(dataRecords){
      this.Matches = JSON.parse(dataRecords) ;
    }
    console.log(this.matchRecords)
    console.log(this.Matches);
  }

  showDetails(object: any) {
    console.log(object);
    this.router.navigate(['matches', object.matchID]);
  }
  ngOnInit(): void {
  }

}
