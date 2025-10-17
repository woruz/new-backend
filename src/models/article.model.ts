import mongoose, { Schema } from "mongoose";

import type { IArticle } from "./modelInterface.js";


const ArticleSchema = new Schema<IArticle>({
  slug: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  category: {
    type: String,
    enum: ["Politics", "Technology", "Sports", "Business", "Entertainment"],
    required: true,
  },
  author: {
    name: { type: String, required: true },
    avatar: { type: String },
  },
  publishedAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  tags: [String],
  readingTime: { type: Number },
});

export const ArticleModel = mongoose.model<IArticle>("Article", ArticleSchema);