import { IsNotEmpty, IsString } from "class-validator";

export class CreateFeedDto {
    
    @IsString()
    @IsNotEmpty()
    user: string;
}
