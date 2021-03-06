import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserEntity } from './auth/models/user.entity';
import { ResetEntity } from './reset/reset.entity';
import { ResetModule } from './reset/reset.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_auth',
      autoLoadEntities: true,
      // entities: [UserEntity, ResetEntity],
      synchronize: true,
    }),
    ResetModule,],
  controllers: [AppController],
  providers: [AppService],
  exports: [AuthModule]
})
export class AppModule { }
