import express from "express";
const cors = require("cors");

type Article = {
  title: string;
  text: string;
};

const data: Article = {
  title: "Learning Next.js",
  text: "Next.js enables you to create full-stack web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
};

const app = express();

app.use(cors());

app.get("/article", (request, response) => {
  response.send(data);
});

app.listen(4000);
