import { BlogPost } from './blog-post.interface';

export interface ScullyPost extends BlogPost {
  route: string;
}
