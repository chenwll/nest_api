// products.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from '../entities/products.entity';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  // 通过数据库查询产品list
  @Get('list')
  getList(): Promise<Products[]> {
    return this.productsService.getList();
  }
}
