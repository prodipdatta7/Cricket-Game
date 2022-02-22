import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayDefaultsComponent } from './components/play-defaults/play-defaults.component';

const routes: Routes = [
  {
    path: '',
    component: PlayDefaultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayRoutingModule { }
