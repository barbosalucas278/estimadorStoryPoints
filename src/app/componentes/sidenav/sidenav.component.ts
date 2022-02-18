import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Output() onLogoutEvent = new EventEmitter();
  constructor(private socialauthService: SocialAuthService) {}
  user?: SocialUser;
  ngOnInit(): void {
    this.socialauthService.authState.subscribe((user) => {
      this.user = user;
    });
  }
  onLogout() {
    this.onLogoutEvent.emit();
  }
}
