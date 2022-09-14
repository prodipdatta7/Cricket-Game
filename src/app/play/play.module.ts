import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { PlayDefaultsComponent } from './components/play-defaults/play-defaults.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialsModule } from '../angular-materials/angular-materials.module';
import { CommentaryComponent } from './components/commentary/commentary.component';
import { ScorecardComponent } from './components/scorecard/scorecard.component';
import { SquadsComponent } from './components/squads/squads.component';


@NgModule({
  declarations: [PlayDefaultsComponent, CommentaryComponent, ScorecardComponent, SquadsComponent],
  imports: [
    CommonModule,
    PlayRoutingModule,
    FlexLayoutModule,
    AngularMaterialsModule
  ]
})
export class PlayModule { }
