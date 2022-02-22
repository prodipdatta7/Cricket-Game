import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home-defaults',
  templateUrl: './home-defaults.component.html',
  styleUrls: ['./home-defaults.component.scss']
})
export class HomeDefaultsComponent implements OnInit {

  disabled: boolean = true;
  teamCounter: number = 0;
  allTeams: any = [];
  selectedTeamsID: number[] = [];

  constructor(private dataStore: ServiceService, private router: Router) {
    this.allTeams = dataStore.allTeams;
    console.log(this.allTeams)
  }

  updateState(event: any, ID: number) {
    if (event.checked == true) {
      if (this.teamCounter == 2) {
        alert('You can Select exactly 2 teams');
      }
      else {
        ++this.teamCounter;
        this.selectedTeamsID.push(ID);
      }
    }
    else {
      --this.teamCounter;
      this.selectedTeamsID.splice(this.selectedTeamsID.indexOf(ID), 1);
    }
    this.disabled = this.teamCounter !== 2;
    console.log(this.teamCounter, ID)
  }

  Submit() {
    if (this.teamCounter > 2) alert('Select exactly 2 teams to play');
    else {
      this.dataStore.setPlayingTeam(this.selectedTeamsID);
      console.log(this.selectedTeamsID)
      this.router.navigate(['home', 'toss']);
    }
  }

  ngOnInit(): void {
  }


}
