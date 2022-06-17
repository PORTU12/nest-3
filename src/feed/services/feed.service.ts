import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { FeedPostEntity } from '../models/post.entity';
import { FeedPost } from '../models/post.interfaces';

@Injectable()
export class FeedService {
    constructor(
        @InjectRepository(FeedPostEntity)
        private readonly feedPostRepository: Repository<FeedPostEntity>
    ) {}

    createPost(feedPost: FeedPost): Promise<FeedPost> {
        return this.feedPostRepository.save(feedPost);
    }

    findAllPosts(): Promise<FeedPost[]> {
        return this.feedPostRepository.find();
    }
    findPostById(id: number): Promise<FeedPost> {
        return this.feedPostRepository.findOne(id)
    }
    updatePost(id: number, feedPost: FeedPost): Promise<UpdateResult> {
        return this.feedPostRepository.update(id, feedPost)
    }
    deletePost(id: number): Promise<DeleteResult>{
        return this.feedPostRepository.delete(id)
    }}
