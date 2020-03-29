import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./root/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'favoledipane',
    loadChildren: () =>
      import('./root/favoledipane/favoledipane.module').then(
        m => m.FavoledipaneModule
      )
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
