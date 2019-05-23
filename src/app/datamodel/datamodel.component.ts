import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datamodel',
  templateUrl: './datamodel.component.html',
  styleUrls: ['./datamodel.component.css']
})
export class DatamodelComponent implements OnInit {

	codePostal: number;
	ville: string;
	adresse: string;
	typeHabitation: string;
	nbM2: number;
	nbPiece: number;
	nbSDB: number;
	etatCopro: number;
	etatInstallation: number;
	etatMurs: number;
	etatIsolation: number;
	luminosite: number;
	nuisanceSonore: number;
	population: number;
	proxiEcole: number;
	proxiTransport: number;
	proxiCommerce: number;
	orientation: string;
	eauUsee: boolean;
	mitoyen: boolean;
	fibre: boolean;
	piscine: boolean;
	jardin: boolean;
	ascenceur: boolean;
	balcon: boolean;
	veranda: boolean;
	parking: boolean;
	terrasse: boolean;
	tennis: boolean;
	cave: boolean;
	grenier: boolean;

	constructor(obj: any = null)
	{
		if(obj != null)
		{
			Object.assign(this, obj);
		}
	}


	ngOnInit() {
  	}

}


