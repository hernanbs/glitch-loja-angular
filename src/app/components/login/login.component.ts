import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthenticationService } from '../../service/authentication/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  /**/
  modelForm: FormGroup
  /**/
  constructor(private router: Router, private authenticationService :AuthenticationService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.modelForm = this.initValidatorForm()
  }

  initValidatorForm() {
    return new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),
    })
  }

  onClickBtnRegister() {
  	this.router.navigate(['cadastro']); //TODO modificar para ficar mais generico e usar dicionario de paths
  }

  onClickLogin() {
    if (this.isValidLoginInput()) {
      this.authenticationService.authenticate(this.modelForm.value.username, this.modelForm.value.password).then((response) => {
        if (Object.keys(response).length) {
          this.router.navigate(['loja'])
        } else {
          this.showSnackBar("Usuario ou senha incorreto.")
        }
      })
    } else {
      this.showSnackBar("Login possui valores invalidos")
    }
  }

  showSnackBar(message: string) {
    this.snackBar.open(message,'Fechar', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: 'snackRed'
    })
  }

  isValidLoginInput() {
    return this.modelForm.valid
  }
}
