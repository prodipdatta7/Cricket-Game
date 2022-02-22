import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeDefaultsComponent } from './components/home-defaults/home-defaults.component';
import { TossComponent } from './components/toss/toss.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialsModule } from '../angular-materials/angular-materials.module';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamSelectionDialogComponent } from './components/team-selection-dialog/team-selection-dialog.component';
import { FormsModule } from '@angular/forms';
import { PlayersComponent } from './components/players/players.component';


@NgModule({
  declarations: [HomeDefaultsComponent, TossComponent, TeamsComponent, TeamSelectionDialogComponent, PlayersComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialsModule,
    FlexLayoutModule,
    FormsModule,
  ]
})
export class HomeModule { }
