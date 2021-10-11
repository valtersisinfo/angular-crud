import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  product: Product = {
    name: "",
    price: 0
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    })
  }

  atualizarProduto(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.exibirMensagem('Produto atualizado com sucesso');
      this.router.navigate(["/products"]);
    })
  }

  cancelar(): void {
    this.router.navigate(['/products']);
  }

}
