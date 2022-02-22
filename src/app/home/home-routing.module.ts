import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDefaultsComponent } from './components/home-defaults/home-defaults.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TossComponent } from './components/toss/toss.component';

const routes: Routes = [
  {
    path: '',
    component: HomeDefaultsComponent
  },
  {
    path: 'toss',
    component: TossComponent
  },
  {
    path: 'teams',
    component: TeamsComponent
  },
  {
    path: 'players',
    component: PlayersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
