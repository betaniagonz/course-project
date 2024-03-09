import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { RegisterAuthDto } from './dto/register-auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  handleLogin() {
    
  }

  @Post('register')
  handleRegister(@Body() registerBody: RegisterAuthDto) {
    console.log(registerBody);
    return this.authService.register(registerBody);
  }
}
