import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'description',
    loadChildren: () => import('./description/description.module').then( m => m.DescriptionPageModule)
  },
  {
    path: 'se-connecter',
    loadChildren: () => import('./se-connecter/se-connecter.module').then( m => m.SeConnecterPageModule)
  },
  {
    path: 'sinscrire',
    loadChildren: () => import('./sinscrire/sinscrire.module').then( m => m.SinscrirePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'publish-house',
    loadChildren: () => import('./publish-house/publish-house.module').then( m => m.PublishHousePageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
