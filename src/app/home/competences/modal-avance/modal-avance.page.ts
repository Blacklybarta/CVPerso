import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-avance',
  templateUrl: './modal-avance.page.html',
  styleUrls: ['./modal-avance.page.scss'],
})
export class ModalAvancePage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
}
