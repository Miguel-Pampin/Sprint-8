import { Component, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Result, Starship} from 'src/app/interfaces/starship';
import { BuscanavesService } from 'src/app/services/buscanaves.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css']
})
export class NaveComponent {
  title = 'angular-http-client';
  constructor(
    private StarWarsService: BuscanavesService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  @Input() starship!: Result;
  urlImagen: string = 'https://starwars-visualguide.com/assets/img/starships/';

  ngOnInit(): void {

    this.route.params
      .pipe(
        switchMap(({ id }) => this.StarWarsService.getStarship(id)),
        tap(console.log)
      )
      .subscribe((starship) => {
        this.starship = starship;
      });
  }
}
