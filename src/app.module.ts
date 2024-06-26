import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistModule } from './artists/artist.module';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { PlaylistModule } from './playlists/playlist.module';
import { SongsController } from './songs/songs.controller';
import { SongsModule } from './songs/songs.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PlaylistModule, AuthModule, UsersModule, ArtistModule,
    SongsModule,
    TypeOrmModule.forRoot(dataSourceOptions)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {

  constructor(private dataSource: DataSource) { }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(SongsController);
  }

}
