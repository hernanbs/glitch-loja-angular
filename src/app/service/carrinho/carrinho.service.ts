import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as moment from 'moment';

import { Carrinho } from '../../model/carrinho/carrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private dbFirebase: AngularFireDatabase) { }

  async insert(carrinho: Carrinho) {
    this.getCarrinhoByUserID(carrinho).then((response)=>{
      const carResponse = response as Array<Carrinho>
      if (carResponse.length) {
        const carUpdate = new Carrinho({
          lastUpdate: moment().format(),
          productIds: carResponse[carResponse.length-1].productIds.concat(carrinho.productIds),
          userId: carrinho.userId
        })
        this.update(carUpdate, response[carResponse.length-1]['$key'])
      } else {
        this.dbFirebase.list('carrinho').push(carrinho).then((result: any) => {
          return result.key
        })
      }
    })
  }

  getAll() {
    var carrinhoList = []
    this.dbFirebase.list('carrinho').snapshotChanges().subscribe(response => {
      response.forEach(async item => { 
        let a = item.payload.toJSON()
        a['$key'] = item.key
        await carrinhoList.push(a as Carrinho)
      })
    })
    return carrinhoList
  }

  update(carrinho: Carrinho, key: string) {
  	this.dbFirebase.list('carrinho').update(key, carrinho)
  }

  delete(key: string) {
  	this.dbFirebase.object('carrinho/${key}').remove()
  }

  getCarrinhoByUserID(carrinho: Carrinho) {
    return new Promise(resolve => {
      var carList = []
      this.dbFirebase.list('carrinho').snapshotChanges().subscribe( async response => {
        await response.forEach(item => { 
          let a = item.payload.val()
          a['$key'] = item.key
          if (a['userId'] === carrinho.userId) {
            carList.push(a as Carrinho)
          }
        })
        resolve(carList)
      })
    })
  }
}
