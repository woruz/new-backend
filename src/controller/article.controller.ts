import { Request, Response } from "express";
import { ArticleModel } from "../models/article.model.ts";
import { slugify } from "../utils/slugify.ts";

export const getArticles = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const category = req.query.category as string;
    const q = req.query.q as string;
 
    const filter: Record<string, any> = {};

    if (category) filter.category = category;
    if (q) filter.$or = [
      { title: new RegExp(q, "i") },
      { content: new RegExp(q, "i") },
    ];

    const articles = await ArticleModel.find(filter)
      .sort({ publishedAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await ArticleModel.countDocuments(filter);

    res.json({
      articles,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getArticleBySlug = async (req: Request, res: Response) => {
  const { slug } = req.params;
  const article = await ArticleModel.findOne({ slug });
  if (!article) return res.status(404).json({ message: "Article not found" });

  const related = await ArticleModel.find({
    category: article.category,
    slug: { $ne: slug },
  }).limit(3);

  res.json({ article, related });
};

export const createArticle = async (req: Request, res: Response) => {
  const { title, content, excerpt, category, author, imageUrl, tags } = req.body;
  const slug = slugify(title);

  const words = content.split(/\s+/).length;
  const readingTime = Math.ceil(words / 200);

  const article = await ArticleModel.create({
    title,
    slug,
    content,
    excerpt,
    category,
    author,
    imageUrl,
    tags,
    readingTime,
  });

  res.status(201).json(article);
};

export const updateArticle = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updated = await ArticleModel.findByIdAndUpdate(id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: "Not found" });
  res.json(updated);
};

export const deleteArticle = async (req: Request, res: Response) => {
  const { id } = req.params;
  await ArticleModel.findByIdAndDelete(id);
  res.json({ message: "Deleted successfully" });
};
