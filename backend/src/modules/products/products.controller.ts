import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private products: ProductsService) {}

  @Get()
  list() {
    return this.products.list();
  }
}