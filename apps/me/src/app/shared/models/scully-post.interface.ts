import { BlogPost } from './blog-post.interface';

export interface ScullyPost extends BlogPost {
  route: string;
  title?: string;
  published?: boolean;
  slug?: string;
  sourceFile?: string;
  lang?: string;
  [prop: string]: any;
}
