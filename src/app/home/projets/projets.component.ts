import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss'],
})
export class ProjetsComponent implements OnInit {

  public show1 = false;
  public show2 = false;
  public show3 = false;

  constructor() { }

  ngOnInit() { }

  visible(detail) {
    switch (detail) {
      case 'show1':
        if (this.show1) {
          this.show1 = false;
        } else {
          this.show1 = true;
        }
        break;
      case 'show2':
        if (this.show2) {
          this.show2 = false;
        } else {
          this.show2 = true;
        }
        break;
      case 'show3':
        if (this.show3) {
          this.show3 = false;
        } else {
          this.show3 = true;
        }
        break;
    }
  }

}
