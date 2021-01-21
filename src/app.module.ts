import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'agetic',
      password: 'agetic',
      database: 'nestbackend',
      autoLoadEntities: true,
      synchronize: true,
      // type: 'postgres',
      // host: process.env.DATABASE_HOST,
      // port: +process.env.DATABASE_PORT,
      // username: process.env.DATABASE_USER,
      // password: process.env.DATABASE_PASSWORD,
      // database: process.env.DATABASE_NAME,
      // autoLoadEntities: true,
      // synchronize: true,            
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
