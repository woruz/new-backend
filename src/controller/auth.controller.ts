import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  const expiresIn = process.env.JWT_EXPIRES_IN;
  if (!expiresIn) {
    throw new Error("JWT_EXPIRES_IN is not defined");
  }

  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASS
  ) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET!, { expiresIn: expiresIn });
    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentials" });
};
