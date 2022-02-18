import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  imgBtnGoogle: string = environment.urlImgBtnGoogle;
  imgLogin: string = environment.urlImgLogin;
  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
  async loginWithGoogle() {
    try {
      const user = await this.socialAuthService.signIn(
        GoogleLoginProvider.PROVIDER_ID
      );
      console.log(user);
      await this.authService.registerWithGoogle(user);
      if (user) {
        this.router.navigate(['home']);
      }
    } catch (error) {
      console.log(error);
    }
  }
  Logout() {
    this.socialAuthService.signOut();
  }
}
