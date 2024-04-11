import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm/repository/Repository';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  @InjectRepository(Product)
  private readonly productRepository: Repository<Product>;
  findAll() {
    return this.productRepository.find();
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }
}
