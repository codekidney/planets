import { Component, OnInit } from '@angular/core';
import { PlanetsService } from './../planets.service';
import { Planet } from './../../shared/models/planet.model';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.sass'],
  providers: [PlanetsService]  
})
export class PlanetListComponent implements OnInit {
  loadedPlanets: Planet[] = [];
  isFetching = false;

  config:any = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: this.loadedPlanets.length
  };

  constructor(private planetsService: PlanetsService) { }

  ngOnInit() {
    this.isFetching = true;
    this.planetsService.fetchPlanets().subscribe( planets => {
      this.isFetching    = false;
      this.loadedPlanets = planets;
      this.config.totalItems = this.loadedPlanets.length;
    });
  }

  onChangePaginationItemsPerPage (val:number) {
    this.config.itemsPerPage = val;
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

}
