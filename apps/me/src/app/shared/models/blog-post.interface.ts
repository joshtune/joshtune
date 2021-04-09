import { Author } from './author.interface';

export interface BlogPost {
  author?: Author;
  categories?: string[];
  datePublished?: string;
  dateReWritten?: string;
  tags?: string[];
  thumbnail?: string;
}
