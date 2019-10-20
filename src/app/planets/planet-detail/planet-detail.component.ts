import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PlanetsService } from '../planets.service';
import { Planet } from './../../shared/models/planet.model';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.sass'],
  providers: [PlanetsService]
})
export class PlanetDetailComponent implements OnInit {
  planet: Planet;
  isFetching = false;
  id: number;

  constructor(private route:ActivatedRoute, private planetsService: PlanetsService) { }

  ngOnInit() {
    this.isFetching = true;
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];

        this.planetsService.fetchPlanet(this.id).subscribe( planet => {
          this.isFetching = false;
          this.planet = planet;
        });
      }
    );
  }

}
