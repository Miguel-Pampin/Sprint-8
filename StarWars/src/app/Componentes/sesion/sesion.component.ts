import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() { }
}

