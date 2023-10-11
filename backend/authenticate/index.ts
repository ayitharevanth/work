import jwt from "jsonwebtoken";
export const SECRET = "SE3CRET";

export const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        res.sendStatus(403);
      } else {
       
        req.user = "user";
        next();
      }
    });
  } else {
    res.status(401).send("Authentication denied");
  }
};
