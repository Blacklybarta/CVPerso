import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  options : InAppBrowserOptions = {
    location : 'no',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};

  constructor(private alertController: AlertController, private iab: InAppBrowser) { }

  ngOnInit() {}

  async presentAlertDownLoadCV() {
    const alert = await this.alertController.create({
      header: 'Accès à mon CV',
      message: 'Confirmer <strong>l\'ouverture de mon CV </strong> dans un nouvel onglet ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Ouvrir',
          handler: () => {
            this.openWithInAppBrowser('https://jefpoughon.com/CVJeanFrancoisPoughonDeveloppeurAndroid.pdf');
          }
        }
      ]
    });

    await alert.present();
  }

  private openWithInAppBrowser(url : string){
    let target = "_blank";
    this.iab.create(url,target,this.options);
}

}
