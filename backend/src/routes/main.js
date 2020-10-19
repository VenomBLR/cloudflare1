import { Router } from "express";
import Model from "../models/model.js";

const arrayURLs = [];
arrayURLs.push(
  new Model({ name: "Google", url: `https://www.google.com/` }),
  new Model({ name: "LinkedIn", url: `https://www.linkedin.com/` }),
  new Model({ name: "Facebook", url: `https://www.facebook.com/` })
);

const router = Router();

router.get("/", (req, res) => {
  try {
    res.send(`Server works!`);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/links", (req, res) => {
  try {
    (Number(req.query.id) || Number(req.query.id) === 0) &&
    req.query.id < arrayURLs.length
      ? res.json(arrayURLs[req.query.id])
      : res.json(arrayURLs);
  } catch (error) {
    res.send(error.message);
  }
});

export default router;
