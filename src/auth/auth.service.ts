import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-users,dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt  from 'bcryptjs'
import { User } from 'src/users/entity/users.entity';

@Injectable()
export class AuthService {
    constructor(private usersService:UsersService,
                private jwtService:JwtService
      ) {}

    async login(dto:CreateUserDto){
          const user = await this.validateUser(dto);
          return await this.GenerateToken(user)
    }

     async  reg(dto:CreateUserDto){
       const candidate =  await this.usersService.regis(dto.username);

       if(candidate){
          throw new  HttpException('Такой пользователь уже есть',HttpStatus.BAD_REQUEST)
       }

       const hashPassword =  await bcrypt.hash(dto.password, 7);
       const user = await this.usersService.createUser({...dto,password:hashPassword});
       return  this.GenerateToken(user)
    }

    async GenerateToken(user:User){
        const payload = {username: user.username, login:user.login, password:  user.password}

        return {
            token: this.jwtService.sign(payload)
        }
    }

     async validateUser(dto:CreateUserDto){
        const user  = await this.usersService.regis(dto.username);
        const passwordEquals = await bcrypt.compare(user.username);

        if(user && passwordEquals){
            return user;
        }
        throw new  UnauthorizedException({message:'Некорретные данные'})
    }

}
