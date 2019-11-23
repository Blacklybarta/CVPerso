import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { PresentationComponent } from './presentation/presentation.component';
import { FormationComponent } from './formations/formation.component';
import { CompetenceComponent } from './competences/competence.component';
import { ProjetsComponent } from './projets/projets.component';
import { InteretsComponent } from './interets/interets.component';
import { FooterComponent } from './footer/footer.component';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  providers:[InAppBrowser],
  declarations: [
    HomePage,
    FormationComponent,
    PresentationComponent,
    CompetenceComponent,
    ProjetsComponent,
    InteretsComponent,
    FooterComponent
  ]
})
export class HomePageModule {}
