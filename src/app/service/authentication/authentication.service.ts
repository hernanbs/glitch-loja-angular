import { Injectable } from '@angular/core';
import { UsuarioService } from '../../service/usuario/usuario.service'
import { Usuario } from '../../model/usuario/usuario'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private usuarioService: UsuarioService) { }

  authenticate(username: string, password: string) {
    return this.findUser(username, password).then((response) => {
      sessionStorage.setItem('userID', response['$key'])
      return response
    })
  }

  isLogged() {
  	return sessionStorage.getItem('userID') !== null // TODO mudar para token
  }

  logOut() {
  	sessionStorage.removeItem('userID') // TODO mudar para token
  }

  findUser(username: string, password: string) {
    return this.usuarioService.getByUsername({username} as Usuario).then(res=>{
      const userArray = res as Array<Usuario>
      if (userArray.length === 1 && userArray[0].password === password) {
        return userArray[0]
      }
      return {}
    })
  }

  getCurrentUserID() {
    return sessionStorage.getItem('userID')
  }
}
