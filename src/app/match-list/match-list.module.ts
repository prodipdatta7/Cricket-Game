import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchListRoutingModule } from './match-list-routing.module';
import { MatchListDefaultsComponent } from './components/match-list-defaults/match-list-defaults.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialsModule } from '../angular-materials/angular-materials.module';
import { FilterPipe } from './Pipes/filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MatchListDefaultsComponent,
    MatchDetailsComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    MatchListRoutingModule,
    AngularMaterialsModule,
    FlexLayoutModule,
    FormsModule,
  ]
})
export class MatchListModule { }
