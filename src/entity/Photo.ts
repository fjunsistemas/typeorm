import { Album } from "./Album";
import { Author } from "./Author";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
} from "typeorm";

@Entity({ name: "photo" })
export class Photo {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column("text")
  description: string;

  @Column()
  filename: string;

  @Column("int")
  views: number;

  @Column()
  isPublished: boolean;

  @ManyToOne((type) => Author, (author) => author.photos)
  author: Author;

  @ManyToMany((type) => Album, (album) => album.photos)
  albums: Album[];
}
