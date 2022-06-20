//import { UserEntity } from "src/auth/models/user.entity";//
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FeedPostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    //@ManyToOne(()=>UserEntity, (userEntity)=>userEntity.feedPosts)
    //author: UserEntity;//
}