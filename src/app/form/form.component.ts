import { NgModule, Component, OnInit } from '@angular/core';
import { DataBienImmoService } from './../data-bien-immo.service';
import { DataTypeService } from '../data-type.service';
import { DataCodePostalService } from '../data-code-postal.service';
import { BienImmoService } from '../bien-immo.service';
import { BienImmo } from '../model/bien-immo';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Options } from 'ng5-slider';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

//declare function runAlgorithms(res): any;
declare function leBonCoin(ville, type, rooms, square): any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent implements OnInit {


  bienImmo: BienImmo;

  constructor(private route: ActivatedRoute, private router: Router, private bienImmoService: BienImmoService, private fb: FormBuilder) {
    this.bienImmo = new BienImmo();
  }

  value1: number = 0;
  value2: number = 0;
  value3: number = 0;
  value4: number = 0;
  value5: number = 0;
  value6: number = 0;
  value7: number = 0;
  value8: number = 0;
  value9: number = 0;
  value10: number = 0;
  value11: number = 0;

  form = this.fb.group({
      codePostal: ['', Validators.required],
      ville: ['', Validators.required],
      adresse: ['', Validators.required],
      typeHabitation: ['', Validators.required],
      nbM2: ['', Validators.required],
      nbPiece: ['', Validators.required],
      nbSDB: [''],
      etatCopro: [0],
      etatInstallation: [0],
      etatMurs: [0],
      etatIsolation: [0],
      luminosite: [0],
      nuisanceSonore: [0],
      population: [0],
      proxiEcole: [0],
      proxiTransport: [0],
      proxiCommerce: [0],
      orientation: [''],
      eauUsee: [''],
      mitoyen: [''],
      fibre: [''],
      piscine: [''],
      jardin: [''],
      ascenceur: [''],
      balcon: [''],
      veranda: [''],
      parking: [''],
      terrasse: [''],
      tennis: [''],
      cave: [''],
      grenier: ['']
  });

  options: Options = {
    showTicksValues: true,
    stepsArray: [
      {value: 0, legend: 'Ø'},
      {value: 1, legend: 'Mauvais'},
      {value: 2, legend: 'Médiocre'},
      {value: 3, legend: 'Moyen'},
      {value: 4, legend: 'Bon'},
      {value: 5, legend: 'Neuf'}
    ],
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      if (value < 3) {
          return 'red';
      }
      if (value < 4) {
          return 'orange';
      }
      if (value = 5) {
          return 'green';
      }
      return '#2AE02A';
    }
  };

  optionsLumiere: Options = {
    showTicksValues: true,
    stepsArray: [
      {value: 0, legend: 'Ø'},
      {value: 1, legend: 'Sombre'},
      {value: 2, legend: 'Peu lumineux'},
      {value: 3, legend: 'Lumineux'},
      {value: 4, legend: 'Très lumineux'}
    ],
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      if (value < 2) {
          return 'red';
      }
      if (value < 4) {
          return 'orange';
      }
      if (value = 4) {
          return 'green';
      }
      return '#2AE02A';
    }
  };

  optionsSon: Options = {
    showTicksValues: true,
    stepsArray: [
      {value: 0, legend: 'Ø'},
      {value: 1, legend: 'Bruyant'},
      {value: 2, legend: 'Vivant'},
      {value: 3, legend: 'Assez calme'},
      {value: 4, legend: 'Silencieux'}
    ],
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      if (value < 2) {
          return 'red';
      }
      if (value < 4) {
          return 'orange';
      }
      if (value = 4) {
          return 'green';
      }
      return '#2AE02A';
    }
  };

  optionsPop: Options = {
    showTicksValues: true,
    stepsArray: [
      {value: 0, legend: 'Ø'},
      {value: 1, legend: '1'},
      {value: 2, legend: '2'},
      {value: 3, legend: '3'},
      {value: 4, legend: '4'}
    ],
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      if (value < 2) {
          return 'red';
      }
      if (value < 4) {
          return 'orange';
      }
      if (value = 4) {
          return 'green';
      }
      return '#2AE02A';
    }
  };

  optionsDistance: Options = {
    showTicksValues: true,
    stepsArray: [
      {value: 0, legend: 'Ø'},
      {value: 1, legend: '0~1km'},
      {value: 2, legend: '1~5km'},
      {value: 3, legend: '5~10km'},
      {value: 4, legend: '+10km'}
    ],
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      if (value > 3) {
          return 'red';
      }
      if (value > 1) {
          return 'orange';
      }
      if (value = 1) {
          return 'green';
      }
      return '#2AE02A';
    }
  };
  
  datasBienImmo: any;

  // getDataBienImmo() {
  //   this.service.getDataBienImmo().subscribe(res => {
  //     this.datasBienImmo = res;
  //   });
  // }

  ngOnInit() { }
  
  onSubmit() {

    // this.bienImmoService.find(this.form.controls["codePostal"].value,
    //                           this.form.controls["ville"].value, 
    //                           this.form.controls["adresse"].value, 
    //                           this.form.controls["typeHabitation"].value,
    //                           this.form.controls["nbPiece"].value, 
    //                           this.form.controls["nbM2"].value, 
    //                           this.form.controls["nbSDB"].value, 
    //                           this.form.controls["etatCopro"].value, 
    //                           this.form.controls["etatInstallation"].value, 
    //                           this.form.controls["etatMurs"].value, 
    //                           this.form.controls["etatIsolation"].value, 
    //                           this.form.controls["luminosite"].value, 
    //                           this.form.controls["nuisanceSonore"].value, 
    //                           this.form.controls["population"].value, 
    //                           this.form.controls["proxiEcole"].value, 
    //                           this.form.controls["proxiTransport"].value, 
    //                           this.form.controls["proxiCommerce"].value, 
    //                           this.form.controls["orientation"].value, 
    //                           this.form.controls["eauUsee"].value, 
    //                           this.form.controls["mitoyen"].value, 
    //                           this.form.controls["fibre"].value, 
    //                           this.form.controls["piscine"].value, 
    //                           this.form.controls["jardin"].value, 
    //                           this.form.controls["ascenceur"].value, 
    //                           this.form.controls["balcon"].value, 
    //                           this.form.controls["veranda"].value, 
    //                           this.form.controls["parking"].value, 
    //                           this.form.controls["terrasse"].value, 
    //                           this.form.controls["tennis"].value, 
    //                           this.form.controls["cave"].value, 
    //                           this.form.controls["grenier"].value
    //                       ).subscribe(result => this.gotoBienImmoList());

    this.bienImmoService.findAll().subscribe(result => this.gotoBienImmoList());

    leBonCoin(this.form.controls["ville"].value, this.form.controls["typeHabitation"].value, this.form.controls["nbPiece"].value, this.form.controls["nbM2"].value);

    this.form.reset();
  }

  gotoBienImmoList() {
    this.router.navigate(['/bienimmos']);
  }

}
