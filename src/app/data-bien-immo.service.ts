import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class DataBienImmoService {

 	result: any;
	constructor(private http: HttpClient) { }

	getDataBienImmo() {
		const uri = 'http://localhost:4200/datasBienImmo/get';
		return this.http.get(uri).pipe(map(res => {
			return res;
		}));
	}
}