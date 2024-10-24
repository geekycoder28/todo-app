import { Request, Response, NextFunction } from 'express';
import { AUTH_TOKEN } from '../config';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (token && token === `Bearer ${AUTH_TOKEN}`) {
    next();
  } else {
    res.status(403).json({ error: 'Unauthorized' });
  }
};
