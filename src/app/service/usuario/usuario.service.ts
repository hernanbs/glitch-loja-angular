import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuario } from '../../model/usuario/usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private dbFirebase: AngularFireDatabase) { }

  insert(user: Usuario) {
  	return this.dbFirebase.list('usuario').push(user).then((result: any) => {
      return result.key
  	})
  }

  update(user: Usuario, key: string) {
  	this.dbFirebase.list('usuario').update(key, user).catch((error: any) => {
  		console.log(error)
  	})
  }

  async getAll() {
    var userList = []
    this.dbFirebase.list('usuario').snapshotChanges().subscribe(response => {
      response.forEach(item => { 
        let a = item.payload.toJSON()
        a['$key'] = item.key
        userList.push(a as Usuario)
      })
    })
    return await userList
  }

  delete(key: string) {
  	this.dbFirebase.object('usuario/${key}').remove()
  }

  getByUsername(user: Usuario) {
    return new Promise(resolve => {
      var userList = []
      this.dbFirebase.list('usuario').snapshotChanges().subscribe(response => {
          response.forEach(item => { 
          let a = item.payload.toJSON()
          a['$key'] = item.key
          if (a['username'] === user.username) {
            userList.push(a as Usuario)
          }
          resolve(userList)
        })
      })
    })
  }
}
