import express, { Request, Response, Application } from "express";
import morgan from 'morgan';
import 'dotenv/config';
const app: Application = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// settings
app.set('port', process.env.PORT || 8000);


// routes
app.get('/', (req: Request, res: Response): void => { // main route
  res.json({
    message: "server is running successfully", 
    documentation: "https://github.com/Fredvel123/todo-list/tree/master/server/#readme",
  })
})
// routers - users
import usersRouter from './code/users/routers/users.router'

app.use('/api/users', usersRouter)



export default app;