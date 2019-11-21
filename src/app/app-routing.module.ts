import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'modal-avance',
    loadChildren: () => import('./home/competences/modal-avance/modal-avance.module').then( m => m.ModalAvancePageModule)
  },
  {
    path: 'modal-intermediaire',
    loadChildren: () => import('./home/competences/modal-intermediaire/modal-intermediaire.module')
    .then( m => m.ModalIntermediairePageModule)
  },
  {
    path: 'modal-base',
    loadChildren: () => import('./home/competences/modal-base/modal-base.module').then( m => m.ModalBasePageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
