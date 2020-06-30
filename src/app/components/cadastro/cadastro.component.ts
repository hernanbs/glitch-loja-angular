import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import * as moment from 'moment'

import { Usuario } from '../../model/usuario/usuario'
import { UsuarioService } from '../../service/usuario/usuario.service'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.sass']
})
export class CadastroComponent implements OnInit {

	user: Usuario
  BookData: any = [];
  modelForm: FormGroup
  constructor(private router: Router, private usuarioService: UsuarioService, private snackBar: MatSnackBar) { 
  }

  ngOnInit(): void {
  	this.user = new Usuario()
    this.modelForm = this.initValidatorForm()
    console.log(this.modelForm)
  }

  showSnackBar(message: string) {
    this.snackBar.open(message,'Fechar', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: 'snackRed'
    })
  } 

  initValidatorForm() {
    // modificar campo de numero de telefone
    return new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
      'phone': new FormControl(null, [Validators.required, Validators.max(9999999999999)]),
      'dataNasc': new FormControl(null, [Validators.required, Validators.maxLength(10)])
    })
  }
  onClickBtnRegister() {
    if(this.modelForm.valid) {
      const usuario = new Usuario(this.modelForm.value)
      this.usuarioService.getByUsername(usuario).then((res)=>{
        if (!(res as Array<Usuario>).length) {
          this.usuarioService.insert(usuario).then(async(id) => {
            alert("Usuario cadastrado: " + id)
          })
          this.router.navigate(['loja']); 
        } else {
          this.showSnackBar("Nome de usuario já foi usado. Tente outro nome")
        }
      })
      // TODO mudar para um card com sucesso escrito
      // TODO usar Dialog Popup
      
    } else {
      this.showSnackBar("Cadastro possui valores invalidos")
    }
  }
}
