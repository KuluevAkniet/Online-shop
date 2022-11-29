import { ApiProperty, PartialType } from "@nestjs/swagger";
import { Product } from "../entity/product.entity";



export class UpdateProduct extends  PartialType(Product) {
       @ApiProperty()
       category?:string;
} 