import { Body, Controller, Get, Post, Redirect, Render } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get('new')
  @Render('product/new')
  newProductForm() {
    return { title: 'Ajouter un nouveau produit' };
  }

  @Post('new')
  @Redirect('/product')
  async create(@Body() createProductDto: CreateProductDto) {
    await this.productsService.create(createProductDto);
  }

  @Get()
  @Render('product/index')
  async list() {
    const products = await this.productsService.findAll();
    return { products };
  }
}
