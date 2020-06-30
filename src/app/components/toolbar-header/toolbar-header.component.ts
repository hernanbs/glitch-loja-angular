import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication/authentication.service'
import { StoreDataService } from '../../service/store-data/store-data.service'

import { Carrinho } from '../../model/carrinho/carrinho';
import { CarrinhoService } from '../../service/carrinho/carrinho.service'

@Component({
  selector: 'app-toolbar-header',
  templateUrl: './toolbar-header.component.html',
  styleUrls: ['./toolbar-header.component.sass']
})
export class ToolbarHeaderComponent implements OnInit {

  qtdBadges: number

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private carrinhoService: CarrinhoService,
              private storeDataService: StoreDataService) { }

  ngOnInit(): void {
    this.initBadges()
    console.log('BADGES DO SERVICO')
    console.log(this.qtdBadges)
  }

  isLoginPage(): boolean { // TODO reestruturar botoes q aparecem no header
  	return this.router.url === '/login'
  }

  onClickLogin(){ // TODO aplicar pattern nos eventos
    if (this.isLogged()) {
      this.authenticationService.logOut()
    }
    this.router.navigate(['login']) 
  }
  onClickRegister(){ this.router.navigate(['cadastro']) }
  onClickTitle() {this.router.navigate(['loja'])}
  onClickShopping(){this.router.navigate(['carrinho'])}
  isLogged(): boolean {
    return this.authenticationService.isLogged()
  }

  showBadges(){
    return this.qtdBadges <= 0
  }

  initBadges() {
    this.storeDataService.getQtdProdNoCarrinho().subscribe(
      (data)=>{
        this.qtdBadges = data
      })
    // return this.storeDataService.getQtdProdNoCarrinho()
  }
}
