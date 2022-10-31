import { Test, TestingModule } from '@nestjs/testing';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;

  const mockAuthService = {
    create: jest.fn((dto) => {
      return {
        _id: Date.now(),
        email: dto.email,
      };
    }),

    login: jest.fn((dto) => {
      return {
        _id: Date.now(),
        email: dto.email,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    })
      .overrideProvider(AuthService)
      .useValue(mockAuthService)
      .compile();

    controller = module.get<AuthController>(AuthController);
  });

  describe('register', () => {
    it('should register a new user to the system', async () => {
      const userDTO = {
        email: 'champikamendis@gmail.com',
        password: 'abcd',
      };

      expect(await controller.register(userDTO)).toEqual({
        user: {
          _id: expect.any(Number),
          email: userDTO.email,
        },
      });
    });
  });

  describe('login', () => {
    it('should login a user to the system', async () => {
      const userDTO = {
        email: 'champikamendis@gmail.com',
        password: 'abcd',
      };

      expect(await controller.login(userDTO)).toEqual({
        user: {
          _id: expect.any(Number),
          email: userDTO.email,
        },
      });
    });
  });
});
