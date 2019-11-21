import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalIntermediairePageRoutingModule } from './modal-intermediaire-routing.module';

import { ModalIntermediairePage } from './modal-intermediaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalIntermediairePageRoutingModule
  ],
  declarations: [ModalIntermediairePage]
})
export class ModalIntermediairePageModule {}
