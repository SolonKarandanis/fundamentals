import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { CreatePlayListDto } from './dto/create-playlist.dto';
import { Playlist } from './playlist.entity';

@Controller('playlists')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Post()
  create(
    @Body()
    playlistDTO: CreatePlayListDto,
  ): Promise<Playlist> {
    return this.playlistService.create(playlistDTO);
  }

}
