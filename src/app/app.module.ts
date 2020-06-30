import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'
import { MatBadgeModule } from '@angular/material/badge'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { LojaComponent } from './components/loja/loja.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ToolbarHeaderComponent } from './components/toolbar-header/toolbar-header.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { ProductCardComponent } from './components/loja/product-card/product-card.component';
import { DetailComponent } from './components/loja/product-card/detail/detail.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';

@NgModule({
  declarations: [
    AppComponent,
    LojaComponent,
    LoginComponent,
    CadastroComponent,
    ToolbarHeaderComponent,
    ProductCardComponent,
    DetailComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatListModule,
    MatSnackBarModule,
    MatDialogModule,
    MatBadgeModule,
    MatIconModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
