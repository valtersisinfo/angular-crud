import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

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
    this.productService.delete(this.product).subscribe(() => {
      this.productService.exibirMensagem('Produto deletado com sucesso');
      this.router.navigate(["/products"]);
    })
  }

  cancelar(): void {
    this.router.navigate(['/products']);
  }

}
