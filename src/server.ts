import { connectDB } from "./config/db.ts";
import app from "./app.ts";

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
