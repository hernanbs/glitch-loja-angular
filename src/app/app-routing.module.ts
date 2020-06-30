import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LojaComponent } from './components/loja/loja.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { AuthGuardService } from './service/auth-guard/auth-guard.service'

const routes: Routes = [
	{path: '', pathMatch: 'full', redirectTo: 'loja'},
	{path: 'loja', component: LojaComponent, canActivate: [AuthGuardService]},
	{path: 'login', component: LoginComponent},
	{path: 'cadastro', component: CadastroComponent},
	{path: 'carrinho', component: CarrinhoComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
