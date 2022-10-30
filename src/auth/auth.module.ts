import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/models/user.schema';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
})
export class AuthModule {}
