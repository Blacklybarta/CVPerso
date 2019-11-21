import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalIntermediairePage } from './modal-intermediaire.page';

const routes: Routes = [
  {
    path: '',
    component: ModalIntermediairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalIntermediairePageRoutingModule {}
