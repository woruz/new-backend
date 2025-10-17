import express from "express";
import { protect } from "../middleware/authMiddleware.ts";
import {
  getArticles,
  getArticleBySlug,
  createArticle,
  updateArticle,
  deleteArticle,
  getArticleById,
} from "../controller/article.controller.ts";

const router = express.Router();

router.get("/", getArticles);
router.get("/:slug", getArticleBySlug);
router.get("/id/:id", getArticleById);

// Protected
router.post("/", protect, createArticle);
router.put("/:id", protect, updateArticle);
router.delete("/:id", protect, deleteArticle);

export default router;
