export interface NewsType {
  data: Datum[];
  links: Links;
  meta: Meta;
}

export interface Datum {
  id: number;
  title: string;
  excerpt: string;
  published_at: string;
  featured_images: FeaturedImage[];
  content_html: string;
}

export interface FeaturedImage {
  id: number;
  disk_name: string;
  file_name: string;
  path: string;
  extension: string;
}

export interface Links {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: string;
  to: number;
  total: number;
}
