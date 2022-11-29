import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { Product } from 'src/products/entity/product.entity';
import { OneToMany } from 'typeorm';
import { CreateUserDto } from './dto/create-users,dto';
import { UpdateUser } from './dto/update-users.dto';
import { User } from './entity/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor (private readonly usersService:UsersService){}
    @Post('create')
    @UsePipes(new ValidationPipe({transform:true}))
     async createUser(@Body()createUserDto:CreateUserDto){
       return await  this.usersService.createUser(createUserDto)
     }



   
     @Get('all')
     async getAll(){
        return await this.usersService.getAll()
     }

     @Get(':id')
     async findOne(@Param('id') id:string){
         return await this.usersService.findOne(+id)
     }

     @Put(':id')
     async Update(@Param('id') id:string, @Body() updateUser:UpdateUser){
       return await this.usersService.Update(+id,updateUser)
     }

     @Delete(':id')
     async Delete(@Param("id") id:string ){
        return await this.usersService.Delete(+id)
     }


}
