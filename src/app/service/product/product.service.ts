import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { Product } from '../../model/product/product';
import { UrlImageStorageService } from '../../service/url-image-storage/url-image-storage.service'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private dbFirebase: AngularFireDatabase,
              private urlImageStorageService: UrlImageStorageService) { }

  async insert(product: Product) {
  	let filename = product.photo
  	await this.urlImageStorageService.uploadImage('imgdata', filename)
    await this.urlImageStorageService.getImageUrl(filename).then((url) => { 
      product.photo = url
      return this.dbFirebase.list('product').push(product).then((result: any) => {
        console.log('item inserido')
        console.log(product)
        return result.key
      })      
    })
  }

  getAll() {
    var productList = []
    this.dbFirebase.list('product').snapshotChanges().subscribe(response => {
      response.forEach(async item => { 
        let a = item.payload.toJSON()
        a['$key'] = item.key
        await productList.push(a as Product)
      })
    })
    return productList
  }

  update(product: Product, key: string) {
  	this.dbFirebase.list('product').update(key, product).catch((error: any) => {
  		console.log(error)
  	})
  }

  delete(key: string) {
  	this.dbFirebase.object('product/' + key).remove()
  }

  getProductById(key: string) {
    return new Promise((resolve) => {
      this.dbFirebase.object('product/' + key).valueChanges().subscribe(data =>{
        resolve(data)
      })
    })
  }
}
