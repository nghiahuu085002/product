import { ObjectId } from 'bson';
export interface Post {
    _id: string | undefined;
    title: string;
    content: string;
    author: string;
}