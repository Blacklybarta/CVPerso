import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-intermediaire',
  templateUrl: './modal-intermediaire.page.html',
  styleUrls: ['./modal-intermediaire.page.scss'],
})
export class ModalIntermediairePage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
}

