import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { DetailComponent } from './detail/detail.component'

import { CarrinhoService } from '../../../service/carrinho/carrinho.service'
import { AuthenticationService } from '../../../service/authentication/authentication.service'

import { Product } from '../../../model/product/product'
import { Carrinho } from '../../../model/carrinho/carrinho'
import { Usuario } from '../../../model/usuario/usuario'

// import * as moment from 'moment';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {
	@Input() product: Product

  constructor(private router: Router, private authenticationService: AuthenticationService, private dialog: MatDialog, private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
  }

  onClickDetail() {
  	const dialogRef = this.dialog.open(DetailComponent, {
  		data: { product: this.product }
  	});
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  onClickPurchase() {
    const car = new Carrinho({
      productIds: [this.product['$key']],
      userId: this.authenticationService.getCurrentUserID()
    })
    this.carrinhoService.insert(car)
    this.router.navigate(['carrinho']);
  }
}
