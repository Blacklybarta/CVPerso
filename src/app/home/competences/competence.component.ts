import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalAvancePage } from './modal-avance/modal-avance.page';
import { ModalIntermediairePage } from './modal-intermediaire/modal-intermediaire.page';
import { ModalBasePage } from './modal-base/modal-base.page';

@Component({
  selector: 'app-competence',
  templateUrl: 'competence.component.html',
  styleUrls: ['competence.component.scss'],
})

export class CompetenceComponent {

  constructor(public modalController: ModalController) { }


  public async presentModalAvance() {
    const modal = await this.modalController.create({
      component: ModalAvancePage
    });
    return await modal.present();
  }

  public async presentModalIntermediaire() {
    const modal = await this.modalController.create({
      component: ModalIntermediairePage
    });
    return await modal.present();
  }

  public async presentModalBase() {
    const modal = await this.modalController.create({
      component: ModalBasePage
    });
    return await modal.present();
  }
}
