import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product/product'
import { ProductService } from '../../service/product/product.service'
import { AuthenticationService } from '../../service/authentication/authentication.service'

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.sass']
})
export class LojaComponent implements OnInit {
	// produto: object
	produto: any
  produtos: Array<Product>
  prod: any
  blip: Product
  constructor(private productService: ProductService, private authenticationService: AuthenticationService) {}

  ngOnInit() {
    // this.blip = new Product({
    //   title: "Digimon Arcanjo",
    //   name: "Holyangemon",
    //   description: "",
    //   price: 10.00,
    //   photo: "holyangemon.jpg",
    //   attributeType: "Vacina",
    //   stage: "Perfeito"
    // })

    // this.blip = new Product({
    //   title: "O espírito da coragem",
    //   name: "Salamandemon",
    //   description: "Um digimon anfíbio que evoluiu a partir do digiovo da coragem",
    //   price: 10.00,
    //   photo: "salamandemon.jpg",
    //   attributeType: "Virus",
    //   stage: "Adulto"
    // })

    // this.blip = new Product({
    //   title: "",
    //   name: "Agumon",
    //   description: "Um Digimon Réptil com aparência semelhante a um pequeno dinossauro",
    //   price: 18915.00,
    //   photo: "agumon_classic.jpg",
    //   attributeType: "Vacina",
    //   stage: "Criança"
    // })

    // this.blip = new Product({
    //   title: "Um dos cavaleiros sagrados",
    //   name: "Alphamon",
    //   description: "Um dos cavaleiros sagrados",
    //   price: 18915.00,
    //   photo: "Alphamon.jpg",
    //   attributeType: "Vacina",
    //   stage: "Supremo"
    // })

    // this.blip = new Product({
    //   title: "Digimon Cyborg",
    //   name: "Andromon",
    //   description: "Um Digimon Cyborg do tipo humano",
    //   price: 101.00,
    //   photo: "Andromon.jpg",
    //   attributeType: "Vacina",
    //   stage: "Perfeito"
    // })

    // TODO apagar cometarios


    // console.log("resposta")
    // console.log(this.productService.insert(this.blip))


  	this.mockaItemBasico()
    // this.prod = this.productService.getAll()
    // this.produtos = this.productService.getAll()
    // console.log(this.produtos.length)
    // console.log(this.prod)
    // console.log(this.productService.getAll())
    this.produtos = this.getListaProdutos()
    console.log(this.produtos)
  }
  isLogged(): boolean {
    return this.authenticationService.isLogged()
  }

  getListaProdutos() {
    return this.productService.getAll()
  }

  mockaItemBasico() {
  	this.produto = {
  		title: "titulo e nome um pouco maior",
  		name: "nome real",
  		description: "uma descrição grande",
  		price: "18915.00",
  		photo: "https://material.angular.io/assets/img/examples/shiba2.jpg",
  		attributeType: "Vacina",
  		stage: "Adulto"
  	}
  }

}
