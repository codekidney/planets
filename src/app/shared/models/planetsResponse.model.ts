import { Planet} from './planet.model';

export class PlanetsResponse {
    count: number; 
    next: string; 
    previous: string;
    results: Array<Planet>;
}