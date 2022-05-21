import { Track } from 'react-native-track-player';

export interface ITodo {
    id: number;
    title: string;
    description: string;
    userId: IUser['id'];
    categories: ICategory[];
    completed: boolean;
}

export interface ICategory {
    id: number;
    label: string;
    value: string;
    userId: IUser['id'];
}

export interface IUser {
    id: number;
    username: string;
    photo: string;
}

export interface IMusic {
    id: number;
    url: string;
    title: string;
    artist: string;
    avatar: string;
}
