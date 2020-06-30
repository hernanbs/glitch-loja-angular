import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {

	private qtdProdNoCarrinho: number
	private sourceQtdProdNoCarrinho = new BehaviorSubject(0)
	current_state = this.sourceQtdProdNoCarrinho.asObservable()
  constructor() { }

  getQtdProdNoCarrinho(): Observable<number> {
  	// return this.qtdProdNoCarrinho
  	return this.current_state
  }

  setQtdProdNoCarrinho(qtdProdutos: number) {
  	// this.qtdProdNoCarrinho = qtdProdutos
  	this.sourceQtdProdNoCarrinho.next(qtdProdutos)
  }
}
