import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActorProfilePage } from './actor-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ActorProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorProfilePageRoutingModule {}
