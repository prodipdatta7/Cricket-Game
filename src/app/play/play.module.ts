import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { PlayDefaultsComponent } from './components/play-defaults/play-defaults.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialsModule } from '../angular-materials/angular-materials.module';


@NgModule({
  declarations: [PlayDefaultsComponent],
  imports: [
    CommonModule,
    PlayRoutingModule,
    FlexLayoutModule,
    AngularMaterialsModule
  ]
})
export class PlayModule { }
