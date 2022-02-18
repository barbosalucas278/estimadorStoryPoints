import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { environment } from 'src/environments/environment';

//Install
//ng add @angular/fire
@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
  ],
})
export class FirebaseModule {}
