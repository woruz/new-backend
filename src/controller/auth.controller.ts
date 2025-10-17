import { Request, Response } from "express";
import jwt, { SignOptions, Secret } from "jsonwebtoken";

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  const expiresIn = process.env.JWT_EXPIRES_IN;
  if (!expiresIn) {
    throw new Error("JWT_EXPIRES_IN is not defined");
  }

  const secret: Secret | undefined = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined");
  }

  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASS
  ) {
    const options: SignOptions = { expiresIn: expiresIn as unknown as number };
    const token = jwt.sign({ username }, secret, options);
    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentials" });
};
