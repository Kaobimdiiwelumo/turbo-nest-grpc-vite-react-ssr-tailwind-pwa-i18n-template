import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'hms',
      password: 'root',
      database: 'hms',
      synchronize: true,
      autoLoadEntities: true
    }), 

    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
