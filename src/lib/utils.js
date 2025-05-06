import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d", // Token expires in 7 days
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    httpOnly: true, // Helps prevent XSS attacks
    sameSite: "None", // Necessary for cross-origin requests (e.g., frontend and backend on different domains)
    secure: process.env.NODE_ENV === "production", // Only set secure cookies in production (HTTPS)
  });

  return token;
};
