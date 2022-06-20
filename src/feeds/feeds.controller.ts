import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { FeedsService } from './feeds.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';
import { FeedPostEntity } from './entities/feed.entity';

@Controller('feeds')
export class FeedsController {
  constructor(private readonly feedsService: FeedsService) { }

  @Post()
  create(@Body() feedPost: CreateFeedDto): Promise<FeedPostEntity> {
    return this.feedsService.createPost(feedPost);
  }

  @Get()
  async findAll(): Promise<FeedPostEntity[]> {
    return this.feedsService.findAllPosts();
  }
  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number
  ): Promise<FeedPostEntity> {
    return this.feedsService.findPostById(id)
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() feedPost: CreateFeedDto
  ): Promise<UpdateResult> {
    return this.feedsService.updatePost(id, feedPost)
  }

  @Delete(':id')
  delete(
    @Param('id') id: number,
  ): Promise<DeleteResult> {
    return this.feedsService.deletePost(id)
  }
}
