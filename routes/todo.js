import express from "express";

const router = express.Router();

router.get("/test", async (req, res) => {
  res.send("test success").status(200);
});

export default router;
