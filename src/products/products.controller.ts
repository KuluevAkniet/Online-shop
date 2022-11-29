import { Controller,Post,Get,Put,Delete,Body,Param, UsePipes, ValidationPipe} from '@nestjs/common';
import { CreateProductDto } from './dto/create-products.dto';
import { UpdateProduct } from './dto/update-products.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
       constructor( private readonly productsService:ProductsService){}

    @Post('create')
    @UsePipes(new ValidationPipe({transform:true}))
    async createProduct(@Body() createProductDto:CreateProductDto){
      return await  this.productsService.createProduct(createProductDto)
    }

    @Get('all')
    async getAll(){
       return await this.productsService.getAll()
    }

    @Get(':id')
    async findOne(@Param('id') id:string){
        return await this.productsService.findOne(+id)
    }

    @Put(':id')
    async Update(@Param('id') id:string, @Body() updateUser:UpdateProduct){
      return await this.productsService.Update(+id,updateUser)
    }

    @Delete(':id')
    async Delete(@Param("id") id:string ){
       return await this.productsService.Delete(+id)
    }
}
