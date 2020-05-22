import { Request, Response } from 'express';

export default function helloWorld(req: Request, res: Response) {
  return res.json({ message: 'hellow' })
}