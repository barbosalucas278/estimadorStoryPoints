import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs/internal/Observable';
import { Usuario } from 'src/app/entidades/usuario';
import { StorageService } from '../storage/storage.service';
import { UsuariosService } from '../usuarios/usuarios.service';
import { AuthCredential, GoogleAuthProvider } from 'firebase/auth';
import { SocialUser } from 'angularx-social-login';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  statusUserChangedEvent: EventEmitter<boolean> = new EventEmitter();
  currentUserChangedEvent: EventEmitter<boolean> = new EventEmitter();
  hasLogged: boolean = false;
  currentUser?: any;
  constructor(
    private afAuth: AngularFireAuth,
    private usuariosService: UsuariosService
  ) {
    this.afAuth.authState.subscribe((user) => {
      console.log(user);

      if (user) {
        this.setCurrentUser(user);
        this.setHasLogged(true);
      } else {
        this.setHasLogged(false);
      }
    });
  }
  setCurrentUser(user: any) {
    if (user != null) {
      this.currentUser = user;
      this.currentUserChangedEvent.emit(user);
    }
  }
  setHasLogged(condition: boolean) {
    this.hasLogged = condition;
    this.statusUserChangedEvent.emit(condition);
  }
  logout() {
    return this.afAuth.signOut();
  }

  getUserAuthState(): Observable<
    import('firebase/compat').default.User | null
  > {
    return this.afAuth.authState;
  }
  async registerWithGoogle(user: SocialUser) {
    try {
      const idToken = user.idToken;
      const cred = GoogleAuthProvider.credential(idToken);
      await this.afAuth.signInWithCredential(cred);

      await this.usuariosService.crearUsuario({
        name: user.name,
        email: user.email,
      });
    } catch (error) {
      throw new Error('Ha sucedido un error al intentar logearse');
    }
  }
}
