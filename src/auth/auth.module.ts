import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { ArtistModule } from 'src/artists/artist.module';

@Module({
  imports: [
    UsersModule,
    ArtistModule,
  ],
  controllers: [AuthController,],
  providers: [AuthService,],
  exports: [AuthService]
})
export class AuthModule { }
