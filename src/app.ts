import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFoundRoute from './app/middleware/notFoundRoute';
// import router from './app/routes';
import cookieParser from 'cookie-parser';
import router from './app/routes';
const app: Application = express();

app.use(
  cors({
    origin: ['https://level-2-24-assignment-4-client.vercel.app'],
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req: Request, res: Response) => {
  res.send('welcome to assignment 4');
});

app.use('/api/', router);

// not found route
app.use(notFoundRoute);

// global error handler..
app.use(globalErrorHandler);

export default app;
