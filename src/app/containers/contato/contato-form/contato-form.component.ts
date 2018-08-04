import { Component, OnInit } from '@angular/core';
import { ContatoService } from '@app/containers/contato/contato.service';
import { Observable } from 'rxjs/Observable';
import { Assunto } from '@app/containers/contato/contato';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VvService } from '@app/vv.service';
import swal from 'sweetalert2';

@Component({
  selector: 'vv-contato',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.scss']
})
export class ContatoComponent implements OnInit {
  assuntoList: Observable<Assunto>;
  contatoForm: FormGroup;

  constructor(
    private contatoService: ContatoService,
    private vvService: VvService,
    private fb: FormBuilder) {

  }

  ngOnInit() {
    this.getAssuntos();
    this.contatoForm = this.fb.group({
      nome: ['', [Validators.required]],
      assunto: ['', [Validators.required]],
      telefone: ['', []],
      mensagem: ['', [Validators.maxLength(3000)]]
    });
  }

  async getAssuntos() {
    this.assuntoList = await this.contatoService.getAssunto();
  }

  sendFormContact(form) {
    this.vvService.storeMessage(form).then(data => {
      swal('Sucesso', 'Mensagem inserida com sucesso!', 'success');
      this.contatoForm.reset();
    });
  }
}
