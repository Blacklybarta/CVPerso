import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { PresentationComponent } from './presentation/presentation.component';
import { FormationComponent } from './formations/formation.component';
import { CompetenceComponent } from './competences/competence.component';

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
  declarations: [
    HomePage,
    FormationComponent,
    PresentationComponent,
    CompetenceComponent
  ]
})
export class HomePageModule {}
