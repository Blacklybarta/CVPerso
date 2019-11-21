import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAvancePage } from './modal-avance.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAvancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAvancePageRoutingModule {}
