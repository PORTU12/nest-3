import { Injectable } from '@nestjs/common';
import { CreateFeedDto } from './dto/create-feed.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { FeedPostEntity } from './entities/feed.entity';

@Injectable()
export class FeedsService {
  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly feedPostRepository: Repository<FeedPostEntity>
  ) { }
  createPost(feedPost: CreateFeedDto): Promise<FeedPostEntity> {
    return this.feedPostRepository.save(feedPost);
  }

  findAllPosts(): Promise<FeedPostEntity[]> {
    return this.feedPostRepository.find();
  }

  findPostById(id: number): Promise<FeedPostEntity> {
    return this.feedPostRepository.findOne(id)
  }
  updatePost(id: number, feedPost: CreateFeedDto): Promise<UpdateResult> {
    return this.feedPostRepository.update(id, feedPost)
  }

  deletePost(id: number): Promise<DeleteResult> {
    return this.feedPostRepository.delete(id)
  }
}
