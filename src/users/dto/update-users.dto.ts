import { ApiProperty, PartialType } from "@nestjs/swagger";
import { User } from "../entity/users.entity";


export class UpdateUser extends  PartialType(User) {
       @ApiProperty()
       username?: string;
}