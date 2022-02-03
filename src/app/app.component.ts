import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'estimadorHistoryPoints';
  imgBackground: string = environment.imgBackground;
  nombreSector: string = environment.nombreSector;
  version: string = environment.version;
}
