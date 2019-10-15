import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingComponent } from './loading/loading.component';
import { MainComponent } from './main-content/main.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: 'loading', component: LoadingComponent },
  { path: 'main', component: MainComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
