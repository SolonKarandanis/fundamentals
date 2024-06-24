import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller('auths')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

}
