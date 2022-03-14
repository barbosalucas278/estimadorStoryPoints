import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Output() onLogoutEvent = new EventEmitter();
  @Input() user?: any;
  constructor(private router: Router) {}
  ngOnInit(): void {}
  onLogout() {
    this.onLogoutEvent.emit();
  }
  handlerCrearNuevoEstimador() {
    this.router.navigate(['/crearEstimador']);
  }
}
