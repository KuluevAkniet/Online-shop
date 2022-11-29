import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-users,dto';
import { UpdateUser } from './dto/update-users.dto';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)
    private readonly repo: Repository<User>)
    
    {
}
    async createUser(createUserDto:CreateUserDto){
     return  await this.repo.save(createUserDto);
    }

    async  regis(username:string){
     const user = await this.repo.findOne({where:{username}});
     return user;
    }

    async getAll(){
        return this.repo.find()
    }

    async findOne(id:number){
        return await this.repo.findOne({where:{id:id}})
    }

    async Update(id:number,updateUser:UpdateUser){
        const user = await this.repo.findOne({where:{id:id}});
        if(!user)throw new BadRequestException();
        Object.assign(user,updateUser);
        return await  this.repo.save(user)
    }

    async Delete(id:number){
        const users = await this.repo.findOne({where:{id:id}});
        if(!users)throw new BadRequestException();
        return await this.repo.remove(users);
     }
}
