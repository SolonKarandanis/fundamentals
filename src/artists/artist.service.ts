import { Injectable } from '@nestjs/common';
import { Artist } from './artist.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class ArtistService {
  constructor(
    @InjectRepository(Artist)
    private artistRepo: Repository<Artist>,
  ) {}

  findArtist(userId: number): Promise<Artist> {
    return this.artistRepo.findOneBy({ user: { id: userId } });
  }
}
