import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-defaults',
  templateUrl: './root-defaults.component.html',
  styleUrls: ['./root-defaults.component.scss']
})
export class RootDefaultsComponent implements OnInit {

  public matchRecordKey="matchStory";
  public simpleKey = "simple"
  constructor() { }

  ngOnInit(): void {
  }

}
