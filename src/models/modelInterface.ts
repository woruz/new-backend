import { Document } from "mongoose";

export interface IArticle extends Document {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Politics" | "Technology" | "Sports" | "Business" | "Entertainment";
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: Date;
  imageUrl: string;
  tags?: string[];
  readingTime?: number;
}