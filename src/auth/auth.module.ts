import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserSchema } from '../models/user.schema';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
})
export class AuthModule {}
