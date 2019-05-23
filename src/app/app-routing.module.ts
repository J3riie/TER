import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MethodesComponent } from './methodes/methodes.component';
import { ContactComponent } from './contact/contact.component';
import { BienImmoListComponent } from './bien-immo-list/bien-immo-list.component';

const routes: Routes = [
	{ path: '', redirectTo: '/accueil', pathMatch: 'full' },
	{ path: 'accueil',  component: AccueilComponent, data: { animation: 'accueil' } },
	{ path: 'form',  component: FormComponent, data: { animation: 'form' } },
	{ path: 'methodes',  component: MethodesComponent, data: { animation: 'methodes' } },
	{ path: 'contact',  component: ContactComponent, data: { animation: 'contact' } },
	{ path: 'bienimmos', component: BienImmoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }