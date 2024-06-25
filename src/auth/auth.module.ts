import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { ArtistModule } from 'src/artists/artist.module';
import { JwtModule } from '@nestjs/jwt';
import { authConstants } from './auth.constants';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt-strategy';
import { ApiKeyStrategy } from './api-key-strategy';

@Module({
  imports: [
    UsersModule,
    ArtistModule,
    JwtModule.register({
      secret:authConstants.secret,
      signOptions:{
        expiresIn:'1d'
      }
    })
  ],
  controllers: [AuthController,],
  providers: [AuthService,JwtStrategy, ApiKeyStrategy],
  exports: [AuthService]
})
export class AuthModule { }
