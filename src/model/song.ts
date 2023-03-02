import { text } from "express";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import * as url from "url";


@Entity()
export class Song {
    @PrimaryGeneratedColumn()
    idSong: number;
    @Column()
    nameSong: string;
    @Column()
    singer: string
    @Column()
    author: string;
    @Column()
    idAlbum: number;
    @Column({type: "text"})
    image: string;
    @Column({type: "text"})
    sound: string;
    @Column()
    idCategory: number;
    @Column({default: 0})
    count: number;
}
