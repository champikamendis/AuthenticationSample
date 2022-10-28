import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDTO } from 'src/user/register.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LoginDTO } from './login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('register')
  async register(@Body() RegisterDTO: RegisterDTO) {
    const user = await this.userService.create(RegisterDTO);
    return { user };
  }

  @Post('login')
  async login(@Body() UserDTO: LoginDTO) {
    const user = await this.userService.login(UserDTO);
    return { user };
  }
}
