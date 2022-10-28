import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDTO } from 'src/user/register.dto';
import { UserService } from 'src/user/user.service';
import { LoginDTO } from './login.dto';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  // New user registration endpoint
  @Post('register')
  async register(@Body() RegDTO: RegisterDTO) {
    const user = await this.userService.create(RegDTO);
    return { user };
  }

  // User login endpoint
  @Post('login')
  async login(@Body() UserDTO: LoginDTO) {
    const user = await this.userService.login(UserDTO);
    return { user };
  }
}
