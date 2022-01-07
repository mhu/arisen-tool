import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './components/contact/contact.component';
import { MonsterSearchComponent } from './components/monster-search/monster-search.component';

const routes: Routes = [
  { path: 'monsters', component: MonsterSearchComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'monsters', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
