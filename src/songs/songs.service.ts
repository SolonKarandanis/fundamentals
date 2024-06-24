import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Song } from './song.entity';
import { CreateSongDTO } from './dto/create-song-dto';
import { UpdateSongDto } from './dto/update-song-dto';

@Injectable()
export class SongsService {

    constructor(
        @InjectRepository(Song)
        private songsRepository: Repository<Song>,
    ){}
    
    async create(songDTO: CreateSongDTO): Promise<Song> {
        const song = new Song();
        song.title = songDTO.title;
        // song.artists = songDTO.artists;
        song.duration = songDTO.duration;
        // song.lyrics = songDTO.lyrics;
        song.releasedDate = songDTO.releasedDate;
    
        console.log(songDTO.artists);
    
        // find all the artits on the based on ids
        // const artists = await this.artistsRepository.findByIds(songDTO.artists);
        // console.log(artists);
        //set the relation with artist and songs
        // song.artists = artists;
    
        return await this.songsRepository.save(song);
    }
  
    findAll(): Promise<Song[]> {
        return this.songsRepository.find();
    }
    
    findOne(id: number): Promise<Song> {
        return this.songsRepository.findOneBy({ id });
    }
    
    remove(id: number): Promise<DeleteResult> {
        return this.songsRepository.delete(id);
    }
    
    update(id: number, recordToUpdate: UpdateSongDto): Promise<UpdateResult> {
        return this.songsRepository.update(id, recordToUpdate);
    }
}
