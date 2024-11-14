import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';

import todoRoutes from './routes/todos';
import { error } from 'console';

const app = express();

// execute body parser middleware
app.use(json());

// apply route
app.use('/todos', todoRoutes);

//middleware: simple error handling from other middlewares
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
console.log('Listening to port 3000..');
