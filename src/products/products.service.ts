import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm/repository/Repository';


@Injectable()
export class ProductsService {
  @InjectRepository(Product)
  private readonly productRepository: Repository<Product>;
  findAll() {
    return this.productRepository.find();
  }

}
