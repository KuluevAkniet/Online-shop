import {ApiProperty} from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateUserDto {

    @ApiProperty()
    @IsString({message:'should be a string'})
    username:string;

    @ApiProperty()
    @IsString({message:'should be a string'})
    login:string;

    @ApiProperty()
    @IsString({message:'should be a string'})
     password:string;

}