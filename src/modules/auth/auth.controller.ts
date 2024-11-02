import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from '../../common/guards/local-auth.guard';
import { Public } from '../../common/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public() // This endpoint is public (neccessary for signin)
  @UseGuards(LocalAuthGuard)
  @Post()
  login(@Request() req) {
    return this.authService.login(req.user);
  }
}
