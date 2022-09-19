import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "token.01010101";

// Firmar el token con un dato especifico.
const generateToken = (data: string): string => {
  return jwt.sign(data, JWT_SECRET);
};

const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};

export { generateToken, verifyToken };
