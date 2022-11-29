
import { Product } from "src/products/entity/product.entity";
import {Column, Entity, OneToMany,PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({select:true})
    username:string;

    
    @Column({select:true})
    login:string;


    @Column({select:true})
    password:string;

    @OneToMany(() => Product,(product) => product.id)
    products:Product[];
}
