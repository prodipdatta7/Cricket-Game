import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { MatchListDefaultsComponent } from './components/match-list-defaults/match-list-defaults.component';

const routes: Routes = [
  {
    path: '',
    component: MatchListDefaultsComponent
  },
  {
    path: ':id',
    component: MatchDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchListRoutingModule { }
