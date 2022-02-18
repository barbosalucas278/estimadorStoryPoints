import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userData?: Usuario;
  userHasLogged: boolean;
  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router
  ) {
    this.userHasLogged = false;
  }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((userState) => {
      if (userState) {
        this.userHasLogged = true;
      } else {
        this.userHasLogged = false;
      }
    });
  }
  handleOnLogoutEvent() {
    this.socialAuthService.signOut().then(() => {
      setTimeout(() => {
        this.router.navigate(['auth']);
      }, 500);
    });
  }
}
