import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthService) {
    this.authService.afAuth.authState.subscribe((user) => {
      this.isLoggedIn = !!user;
    });

 
}  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
