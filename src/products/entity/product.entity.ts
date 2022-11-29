
import { User } from "src/users/entity/users.entity";
import {Column,Entity,PrimaryGeneratedColumn,ManyToOne} from "typeorm";

@Entity()
export class Product {
    
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({select:true})
    category:string;

    @Column({select:true})
    firms:string;

    @Column({select:true})
    manufacturer:string;

    @Column({select:true})
    size:number;

    @ManyToOne(() => User,(user) => user.id)
    user:User
}