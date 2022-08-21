import express, { Request, Response } from "express";
import morgan from 'morgan'
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// settings
app.set('port', process.env.PORT || 8000);


// routes
app.get('/', (req: Request, res: Response) => {
  res.json({message: "server listing on port: 8000"})
})

export default app;