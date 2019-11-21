import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalAvancePage } from './modal-avance/modal-avance.page';

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
}
