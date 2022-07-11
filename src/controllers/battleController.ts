import { Request, Response } from "express";
import * as battleService from "../services/battleService.js";
import BodyInterface from "../interfaces/index.js";

export async function battle(req: Request, res: Response) {
  
  const body: BodyInterface = req.body;
  
  if (!body.firstUser || !body.secondUser) return res.sendStatus(422);

  const battleResult = await battleService.battle(body.firstUser, body.secondUser);
  res.send(battleResult);
}

export async function getRanking(req: Request, res: Response) {
  const ranking = await battleService.find();
  res.send(ranking);
}
