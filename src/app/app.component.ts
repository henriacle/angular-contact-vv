import { Component } from '@angular/core';
import { VvService } from './vv.service';

@Component({
  selector: 'vv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [VvService]
})

export class AppComponent {}
