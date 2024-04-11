import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Redirect,
  Render,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

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

  @Get('edit/:id')
  @Render('product/edit')
  async edit(@Param('id') id: string) {
    const product = await this.productsService.findOne(id);
    return { product };
  }

  @Post('edit/:id')
  @Redirect('/product') // Redirige vers la page de liste des produits après la modification
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    await this.productsService.update(id, updateProductDto);
  }
  @Post('delete/:id')
  @Redirect('/product')
  async delete(@Param('id') id: string) {
    await this.productsService.delete(id);
  }
}
