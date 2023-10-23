import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();
const collection = await db.collection("lists");

router.get("/", async (req, res) => {
  const result = await collection.find({}).toArray();
  res.send(result).status(200);
});

router.get("/createmockdata", async (req, res) => {
  const result = await collection.insertOne({
    usertoken: "fonfon",
    darkmode: false,
  });
  res.send(result).status(200);
});

router.post("/", async (req, res) => {
  const { usertoken, darkmode } = req.body;
  const result = await collection.insertOne({
    usertoken: usertoken,
    darkmode: darkmode,
    todo: [],
  });
  res.send(result).status(200);
});

export default router;
