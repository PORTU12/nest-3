import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { FeedPostEntity } from '../models/post.entity';
import { FeedPost } from '../models/post.interfaces';
import { FeedService } from '../services/feed.service';

@Controller('feed')
export class FeedController {
    feedPostRepository: any;
    constructor(private feedService: FeedService) { }
    @Post()
    create(@Body() feedPost: FeedPost): Observable<FeedPost> {
        return this.feedService.createPost(feedPost);
    }

    @Get()
    async findAll(): Promise<Observable<FeedPost[]>>{
        return this.feedService.findAllPosts();
    }
    @Get(':id')
    async findOne(
        @Param('id') ids: number[]
    ): Promise<Observable<FeedPostEntity[]>>{
        return this.feedService.findPostById(ids)
    }
    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() feedPost: FeedPost
    ): Observable<UpdateResult> {
        return this.feedService.updatePost(id, feedPost)
    }
    @Delete(':id')
    delete(
        @Param('id') id:number,
    ): Observable<DeleteResult> {
        return this.feedService.deletePost(id)
    }
}