import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
  sub: string;
}

export function ensureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      "5c801978-0d64-47d6-b9c7-2d82bffe5b83",
    ) as IPayLoad;
    request.user_id = sub;

    return next();
  } catch (error) {
    return response.status(401).json({
      message: "Invalid Token",
    });
  }
}
