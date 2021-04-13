import { Author } from './author.interface';

export interface BlogPost {
  author: Author;
  categories: string[];
  date: string;
  description: string;
  featured: boolean;
  published: boolean;
  tags: string[];
  title: string;
  thumbnail: string;

  slug?: string;
  sourceFile?: string;
  lang?: string;
}
