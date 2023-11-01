import jwt from "jsonwebtoken";
import { Request,Response,NextFunction } from "express";
export const SECRET = "SE3CRET";

export const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log(authHeader)

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    
    jwt.verify(token, SECRET, (err, payload) => {

      if (err) {
        res.sendStatus(403)
      } else {
        if(!payload){
          res.sendStatus(403)
        }   
        if(typeof payload == "string"){
          res.sendStatus(403)
        }
        
        req.headers["userid"] = payload.id 
        next();
      }
    });
  } else {
    res.status(401).send("Authentication denied");
  }
};


