import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d", // Token expires in 7 days
  });

res.cookie("jwt", token, {
  maxAge: 7 * 24 * 60 * 60 * 1000,
  httpOnly: true,
  sameSite: "none",  // ⬅️ Allows cross-site cookies (frontend <> backend on different domains)
  secure: true,     // ⬅️ Required when sameSite is "none"
});

  return token;
};
