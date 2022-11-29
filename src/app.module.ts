import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DB_CONFIG} from "./utils/db_config";
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
      TypeOrmModule.forRoot(DB_CONFIG),
      UsersModule,
      ProductsModule,
      AuthModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
