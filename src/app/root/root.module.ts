import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootDefaultsComponent } from './components/root-defaults/root-defaults.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularMaterialsModule } from './../angular-materials/angular-materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    RootDefaultsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RootRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    AngularMaterialsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [
    RootDefaultsComponent
  ]
})
export class RootModule { }
