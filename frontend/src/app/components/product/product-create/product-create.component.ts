import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  // Serviu para mudar id com [id]
  propLegal = "Qualquer"
  //
  product: Product = {
    name: "",
    price: 0
  }

  constructor(
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {

  }

  criarProduto(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.exibirMensagem("Operação executada com sucesso")
      this.router.navigate(["/products"])
    })
  }

  cancelar(): void {
    this.router.navigate(["/products"])
  }

  fazerAlgo(): void {
    console.log("Teste")
  }
}
