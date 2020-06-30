import { Component, OnInit } from '@angular/core';

import { CarrinhoService } from '../../service/carrinho/carrinho.service'
import { ProductService } from '../../service/product/product.service'
import { AuthenticationService } from '../../service/authentication/authentication.service'
import { StoreDataService } from '../../service/store-data/store-data.service'

import { Carrinho } from '../../model/carrinho/carrinho';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.sass']
})
export class CarrinhoComponent implements OnInit {
	produtos: any
  constructor(private authenticationService: AuthenticationService,
						  private productService: ProductService,
						  private carrinhoService: CarrinhoService,
              private storeDataService: StoreDataService) { }

  ngOnInit(): void {
    console.log('carregando carrinho')
    this.getProductsFromCar().then(async (data) => {
      this.produtos = await data
    })
  }


  getProductsFromCar(){
    return this.carrinhoService.getCarrinhoByUserID(new Carrinho({userId: this.authenticationService.getCurrentUserID()})).then(
      async (response) => {
        const carrinhos = await response as Array<Carrinho>
        const carrinho = carrinhos[carrinhos.length-1]

        this.storeDataService.setQtdProdNoCarrinho(carrinho.productIds.length)
        
        const promiseArray = []
        carrinho && carrinho.productIds.forEach((obj,index)=>{
          promiseArray.push(this.productService.getProductById(obj))
        })
        return Promise.all(promiseArray)
      })
  }
}
