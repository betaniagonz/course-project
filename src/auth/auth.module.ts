import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/model/users.schema';

@Module({
  imports:[MongooseModule.forFeature([
    { name: User.name, schema: UserSchema }
  ])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
