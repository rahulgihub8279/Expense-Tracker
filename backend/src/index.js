import express from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(8000, () => console.log(`server is running on 8000`));

app.get("/", (req, res) => {
  res.json({ message: "setup complete" });
});
