import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

// your beautiful code...

app.get("/", (req, res) => {
  res.send("Hello World!");
});

if (process.env.NODE_ENV !== "dev") {
  let port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

export const viteNodeApp = app;
