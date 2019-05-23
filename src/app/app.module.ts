import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Ng5SliderModule } from 'ng5-slider';
import { FormComponent } from './form/form.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MethodesComponent } from './methodes/methodes.component';
import { ContactComponent } from './contact/contact.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DataBienImmoService } from './data-bien-immo.service';
import { DataCodePostalService } from './data-code-postal.service';
import { DataTypeService } from './data-type.service';

import { BienImmoListComponent } from './bien-immo-list/bien-immo-list.component';
import { BienImmoService } from './bien-immo.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'form', component: FormComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'methodes', component: MethodesComponent },
  { path: 'contact', component: ContactComponent }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AccueilComponent,
    MethodesComponent,
    ContactComponent,
    BienImmoListComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    Ng5SliderModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    BienImmoService,
    DataBienImmoService,
    DataCodePostalService,
    DataTypeService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }