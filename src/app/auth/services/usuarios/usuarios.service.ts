import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Usuario } from 'src/app/entidades/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private usuariosRef: AngularFirestoreCollection;
  constructor(private db: AngularFirestore) {
    this.usuariosRef = this.db.collection('usuarios');
  }
  obtenerCurrentUsuario(emailCurrentUser: string) {
    const currentUsuario = this.db.collection('usuarios', (ref) =>
      ref.where('email', '==', `${emailCurrentUser}`)
    );
    return currentUsuario.valueChanges() as Observable<Usuario[]>;
  }
  crearUsuario(usuario: Usuario) {
    return this.usuariosRef.add({ ...usuario });
  }
  obtenerUsuarios() {
    return this.usuariosRef.valueChanges() as Observable<Usuario[]>;
  }
}
