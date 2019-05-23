import { Component, OnInit } from '@angular/core';
import { BienImmo } from '../model/bien-immo';
import { BienImmoService } from '../bien-immo.service';
 
@Component({
  selector: 'app-bien-immo-list',
  templateUrl: './bien-immo-list.component.html',
  styleUrls: ['./bien-immo-list.component.css']
})
export class BienImmoListComponent implements OnInit {
 
  bienimmos: BienImmo[];
 
  constructor(private bienImmoService: BienImmoService) {
  }
 
  ngOnInit() {
    this.bienImmoService.findAll().subscribe(data => {
      this.bienimmos = data;
    });
  }
}