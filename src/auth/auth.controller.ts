import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-users,dto';
import { User } from 'src/users/entity/users.entity';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
     constructor(private readonly authService: AuthService){}
     @Post('login')
      async  login(@Body() dto:CreateUserDto){
         return await this.authService.login(dto)
      }

      @Post('registr')
      async  reg(@Body() dto:CreateUserDto){
         return await this.authService.reg(dto)
      }

      @Post('token')
       async GenerateToken(@Body() user:User){
            return await this.authService.GenerateToken(user)
       }

       @Post('validate')
       async validateUser(@Body() dto:CreateUserDto){
           return this.authService.validateUser(dto)
       }
       

}