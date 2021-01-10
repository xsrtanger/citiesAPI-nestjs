import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
