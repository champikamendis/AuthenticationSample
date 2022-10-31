import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserSchema } from '../models/user.schema';

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
      imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  describe('register', () => {
    it('should register a new user to the system', async () => {
      const user = {
        _id: '635e2e57cbb98e6a60cbfcdf',
        email: 'champikamendis2@gmail.com',
        __v: 0,
      };
      const result = [{ user }];
      jest.spyOn(service, 'create').mockImplementation(async () => {
        return user;
      });

      expect(await controller.register).toBe(result);
    });
  });
});
