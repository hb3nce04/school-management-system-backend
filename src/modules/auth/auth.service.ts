import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const foundUser = await this.prismaService.user.findUnique({
      where: {
        username,
      },
    });
    if (!foundUser) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const hash = await bcrypt.compare(password, foundUser.password);
    if (!hash) {
      throw new UnauthorizedException('Invalid credentials');
    }

    await this.prismaService.user.update({
      where: {
        id: foundUser.id,
      },
      data: {
        lastLoginAt: new Date(),
      },
    });

    return foundUser;
  }

  async login(user: any) {
    const payload = { sub: user.id, username: user.username, role: user.role };
    return {
      user: { id: user.id, username: user.username, role: user.role }, // for React Context
      access_token: this.jwtService.sign(payload),
    };
  }
}
