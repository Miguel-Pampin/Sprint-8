import { BuscanavesService } from 'src/app/services/buscanaves.service';
import { Component, OnInit } from '@angular/core';
import {  Result, Starship } from 'src/app/interfaces/starship';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {
  title = 'angular-http-client';

  starships: Result[] = [];
  page: number = 1;


  onScroll(): void {
    if (this.page === 4) {
      return;
    }
    this.StarWarsService.getAllStarships(++this.page).subscribe(
      (response: Starship) => {
        this.starships.push(...response.results);
      }
    );
  }
  getStarship(id: string) {
    this.router.navigate(['/starships', id]);
  }
  constructor(
    private StarWarsService: BuscanavesService,
    private router: Router,
    private route: ActivatedRoute,
  
  ) {}
  ngOnInit(): void {
    
      this.getStarships();
    
  }
  getStarships() {
    this.StarWarsService.getAllStarships(this.page).subscribe((starships) => {
      console.log(starships);
      this.starships = starships.results;
    });
  }
}
