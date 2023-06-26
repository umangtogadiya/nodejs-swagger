import express from "express";
const app = express();
import { Request, Response, NextFunction } from "express";
import routes from "./routes/routes";
import swaggerDocs from "./utils/swagger";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/", routes);
app.get("/tets", (req: Request, res: Response) => {
  res.send({ status: "success" });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log("❌ ", err);
  return res.status(500).send("Something went wrong!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`✅ Server Listening on ${port}`);
  swaggerDocs(app);
});
