import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userData?: any;
  userHasLogged: boolean;
  constructor(private authService: AuthService, private router: Router) {
    this.userHasLogged = false;
    this.authService.statusUserChangedEvent.subscribe((userState) => {
      if (userState) {
        this.userHasLogged = true;
        this.userData = this.authService.currentUser;
      } else {
        this.userHasLogged = false;
      }
    });
  }

  ngOnInit(): void {}
  handleOnLogoutEvent() {
    this.authService.logout().then(() => {
      setTimeout(() => {
        this.router.navigate(['auth']);
      }, 500);
    });
  }
}
