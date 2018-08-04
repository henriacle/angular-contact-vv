import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Assunto } from '@app/containers/contato/contato';

@Injectable()
export class ContatoService {

  constructor(public http: HttpClient) { }

  public getAssunto(): Observable<Assunto> {
    return this.http.get('assets/mock/assuntos.json').map((data: Assunto) => {
      return data;
    });
  }

}
