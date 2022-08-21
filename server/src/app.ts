import express, { Request, Response } from "express";
import morgan from 'morgan'
import 'dotenv/config';
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// settings
app.set('port', process.env.PORT || 8000);


// routes
app.get('/', (req: Request, res: Response) => { // main route
  res.json({
    message: "server is running successfully", 
    documentation: "https://github.com/Fredvel123/todo-list/tree/master/server",
  })
})

export default app;