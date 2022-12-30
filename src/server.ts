import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Webhook test" });
});

app.post("/webhook", (req, res) => {
  console.log(req.body);
  return res.status(200).json({ message: "success", webhook: req.body });
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
