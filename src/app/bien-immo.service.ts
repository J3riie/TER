import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BienImmo } from './model/bien-immo';
import { Observable } from 'rxjs';
 
@Injectable()
export class BienImmoService {
 
	private bienImmosUrl: string;

	constructor(private http: HttpClient) {
		this.bienImmosUrl = 'http://localhost:8080/bienimmos';
	}

	public findAll(): Observable<BienImmo[]> {
		return this.http.get<BienImmo[]>(this.bienImmosUrl);
	}

	// public find(
	// 	  	codePostal: number, 
	// 	  	ville: string, 
	// 	  	adresse: string,
	// 	  	typeHabitation: string,
	// 	  	nbPiece: number,
	// 	  	nbM2: number,
	// 	  	nbSDB: number,
	// 	  	etatCopro: number,
	// 	  	etatInstallation: number,
	// 	  	etatMurs: number,
	// 	  	etatIsolation: number,
	// 	  	luminosite: number,
	// 	  	nuisanceSonore: number,
	// 	  	population: number,
	// 	  	proxiEcole: number,
	// 	  	proxiTransport: number,
	// 	  	proxiCommerce: number,
	// 	  	orientation: number,
	// 	  	eauUsee: number,
	// 	  	mitoyen: number,
	// 	  	fibre: number,
	// 	  	piscine: number,
	// 	  	jardin: number,
	// 	  	ascenceur: number,
	// 	  	balcon: number,
	// 	  	veranda: number,
	// 	  	parking: number,
	// 	  	terrasse: number,
	// 	  	tennis: number,
	// 	  	cave: number,
	// 	  	grenier: number
	// 		): Observable<BienImmo[]> 
	// {
		
	// }
}