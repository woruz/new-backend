import express from "express";
import { protect } from "../middleware/authMiddleware.ts";
import {
  getArticles,
  getArticleBySlug,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../controller/article.controller.ts";

const router = express.Router();

router.get("/", getArticles);
router.get("/:slug", getArticleBySlug);

// Protected
router.post("/", protect, createArticle);
router.put("/:id", protect, updateArticle);
router.delete("/:id", protect, deleteArticle);

export default router;
