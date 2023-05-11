import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent implements OnInit{
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() {
  }

}
