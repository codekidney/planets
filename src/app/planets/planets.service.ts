import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Planet } from './../shared/models/planet.model';

@Injectable()
export class PlanetsService {
  
  constructor(private http: HttpClient) { }
  
  public fetchPlanet(id:number){
    const apiUrl = 'https://swapi.co/api/planets/' + String(id) + '/';
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.get<Planet>( apiUrl )
      .pipe(
        map(responseData => {
          let planet:Planet = responseData;
          
          const iUrl = responseData.url.slice(0,-1);
          const iId  = iUrl.substring( iUrl.lastIndexOf('/') + 1);

          planet.id = +iId;

          return responseData;
        })
    );

  }
  
  public fetchPlanets() {
    const apiUrl:string = './assets/planets.service.json';
    // const apiUrl:string = 'https://swapi.co/api/planets/?format=json';
    return this.http.get<{ [key: string]: Planet }>( apiUrl )
      .pipe(
        map(responseData => {
          const planetsArray = [];
          const results = responseData.results;
          for (const key in results) {
            // console.log(results[key].url);
            const iUrl = results[key].url.slice(0,-1);
            const iId  = iUrl.substring( iUrl.lastIndexOf('/') + 1);
            if (results.hasOwnProperty(key)) {
              planetsArray.push({ ...results[key], id: iId });
            }
          }
          return planetsArray;
        })
      );
  }
}