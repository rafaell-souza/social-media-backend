import { Module } from "@nestjs/common";
import { PostController } from "./post.controller";
import { PostService } from "./post.service";
import { PostRepository } from "src/repositories/post";

@Module({
    providers: [PostService, PostRepository],
    controllers: [PostController]
})
export class PostModule {}