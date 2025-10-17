import mongoose from "mongoose";
import dotenv from "dotenv";
import { ArticleModel } from "./models/article.model.ts";
import { slugify } from "./utils/slugify.ts";

dotenv.config();

const articles = [
  {
    title: "Tech Giants Invest in AI Startups",
    excerpt: "Major technology companies are investing billions in AI startups worldwide.",
    content: "Artificial Intelligence is the future. Many tech giants are now investing heavily in AI startups, expecting breakthroughs in machine learning, natural language processing, and autonomous systems...",
    category: "Technology",
    author: { name: "Alice Johnson", avatar: "https://i.pravatar.cc/150?img=1" },
    imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    tags: ["AI", "Startups", "Tech"],
  },
  {
    title: "Political Tensions Rise Ahead of Elections",
    excerpt: "Countries are preparing for tense elections amid political unrest.",
    content: "As the election approaches, political tensions are rising across the nation. Citizens are divided over key policies, and debates have intensified...",
    category: "Politics",
    author: { name: "Robert Smith", avatar: "https://i.pravatar.cc/150?img=2" },
    imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    tags: ["Elections", "Policy", "Government"],
  },
  {
    title: "New Innovations in Renewable Energy",
    excerpt: "Scientists have developed new methods to increase solar panel efficiency.",
    content: "Renewable energy continues to evolve, with recent innovations making solar panels more efficient and cost-effective...",
    category: "Business",
    author: { name: "Linda Green", avatar: "https://i.pravatar.cc/150?img=3" },
    imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    tags: ["Energy", "Innovation", "Business"],
  },
  {
    title: "Local Team Wins Championship",
    excerpt: "The city celebrates as the local football team wins the national championship.",
    content: "Fans flooded the streets after the local team clinched the championship title in a thrilling final match...",
    category: "Sports",
    author: { name: "Michael Brown", avatar: "https://i.pravatar.cc/150?img=4" },
    imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    tags: ["Football", "Championship", "Team"],
  },
  {
    title: "New Movie Breaks Box Office Records",
    excerpt: "The latest blockbuster has smashed global box office records this weekend.",
    content: "Audiences around the world are flocking to cinemas to watch the newest blockbuster, breaking previous records set by other movies...",
    category: "Entertainment",
    author: { name: "Samantha Lee", avatar: "https://i.pravatar.cc/150?img=5" },
    imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    tags: ["Movies", "Box Office", "Cinema"],
  },
  {
    title: "Advancements in Quantum Computing",
    excerpt: "Researchers achieve a new milestone in quantum computing power.",
    content: "Quantum computers are closer to solving problems impossible for classical machines, with new breakthroughs in qubit stability and error correction...",
    category: "Technology",
    author: { name: "Alice Johnson", avatar: "https://i.pravatar.cc/150?img=1" },
    imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    tags: ["Quantum", "Computing", "Tech"],
  },
  {
    title: "Stock Markets Show Volatility",
    excerpt: "Global markets react to inflation reports and policy changes.",
    content: "Investors are watching global markets closely as volatility increases due to new inflation numbers and central bank announcements...",
    category: "Business",
    author: { name: "Linda Green", avatar: "https://i.pravatar.cc/150?img=3" },
    imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    tags: ["Stocks", "Finance", "Business"],
  },
  {
    title: "Olympic Games Postponed Again",
    excerpt: "The international committee announces a delay in the Olympics due to safety concerns.",
    content: "Organizers of the Olympic Games have announced a postponement citing logistical and safety challenges, affecting athletes worldwide...",
    category: "Sports",
    author: { name: "Michael Brown", avatar: "https://i.pravatar.cc/150?img=4" },
    imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    tags: ["Olympics", "Sports", "Global"],
  },
  {
    title: "New Streaming Series Gains Popularity",
    excerpt: "The latest streaming series becomes a worldwide sensation.",
    content: "Viewers are binge-watching the newest streaming series, generating huge online buzz and trending hashtags...",
    category: "Entertainment",
    author: { name: "Samantha Lee", avatar: "https://i.pravatar.cc/150?img=5" },
    imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    tags: ["Streaming", "Series", "TV"],
  },
  {
    title: "Government Announces New Tech Policy",
    excerpt: "A new policy aims to boost innovation in AI and robotics.",
    content: "The government introduced a tech-focused policy to support startups, research, and innovation in AI, robotics, and other emerging fields...",
    category: "Politics",
    author: { name: "Robert Smith", avatar: "https://i.pravatar.cc/150?img=2" },
    imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    tags: ["Policy", "Tech", "Innovation"],
  },
  {
    title: "Breakthrough in Medical Research",
    excerpt: "Scientists have developed a promising treatment for a rare disease.",
    content: "Medical researchers achieved a breakthrough in treatment development for rare genetic diseases, potentially saving thousands of lives...",
    category: "Business",
    author: { name: "Linda Green", avatar: "https://i.pravatar.cc/150?img=3" },
    imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    tags: ["Medical", "Research", "Health"],
  },
  {
    title: "Football League Announces Schedule",
    excerpt: "The national football league releases its match schedule for the upcoming season.",
    content: "Fans are excited as the national football league announces the fixtures, including key rival matches and opening game highlights...",
    category: "Sports",
    author: { name: "Michael Brown", avatar: "https://i.pravatar.cc/150?img=4" },
    imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    tags: ["Football", "Sports", "League"],
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("✅ Connected to MongoDB");

    await ArticleModel.deleteMany({});
    console.log("🗑️ Cleared old articles");

    for (const a of articles) {
      await ArticleModel.create({ ...a, slug: slugify(a.title), publishedAt: new Date() });
    }

    console.log(`✅ Inserted ${articles.length} articles`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding DB", error);
    process.exit(1);
  }
};

seedDB();
