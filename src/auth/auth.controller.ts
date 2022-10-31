import { Body, Controller, Post } from '@nestjs/common';

import { RegisterDTO } from './dto/register.dto';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // New user registration endpoint
  @Post('register')
  async register(@Body() RegDTO: RegisterDTO) {
    const user = await this.authService.create(RegDTO);
    return { user };
  }

  // User login endpoint
  @Post('login')
  async login(@Body() UserDTO: LoginDTO) {
    const user = await this.authService.login(UserDTO);
    return { user };
  }
}
