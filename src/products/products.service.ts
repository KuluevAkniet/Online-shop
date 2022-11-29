import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-products.dto';
import { UpdateProduct } from './dto/update-products.dto';
import { Product } from './entity/product.entity';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product)
    private readonly repo: Repository<Product>) {
}
    async createProduct(createProductDto:CreateProductDto){
        return await this.repo.save(createProductDto)
    }

    async getAll(){
        return this.repo.find()
    }

    async findOne(id:number){
        return await this.repo.findOne({where:{id:id}})
    }


    async Update(id:number,updateProduct:UpdateProduct){
        const product = await this.repo.findOne({where:{id:id}});
        if(!product)throw new BadRequestException();
        Object.assign(product,updateProduct);
        return await  this.repo.save(product)
    }


    async Delete(id:number){
        const users = await this.repo.findOne({where:{id:id}});
        if(!users)throw new BadRequestException();
        return await this.repo.remove(users);
     }
}
