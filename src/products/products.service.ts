import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm/repository/Repository';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

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

  async findOne(id: string): Promise<Product> {
    return this.productRepository.findOne({ where: { id } })

  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<void> {
    await this.productRepository.update(id, updateProductDto);
  }
}
