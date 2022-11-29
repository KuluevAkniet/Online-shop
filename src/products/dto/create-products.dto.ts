import {ApiProperty} from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {

    @ApiProperty()
    @IsString({message:'should be a string'})
    category:string;

    @ApiProperty()
    @IsNumber({},{message:'should be a number'})
    firms:string;

    @ApiProperty()
    @IsString({message:'should be a string'})
    manufacturer:string;

    @ApiProperty()
    @IsNumber({},{message:'should be a number'})
    size:number;
    
}