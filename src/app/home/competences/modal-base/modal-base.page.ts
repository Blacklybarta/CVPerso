import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-base',
  templateUrl: './modal-base.page.html',
  styleUrls: ['./modal-base.page.scss'],
})
export class ModalBasePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
}
