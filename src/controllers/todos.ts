/*
import { Request, Response, NextFunction } from "express";

export const createTodo = (req: Request, res: Response, next: NextFunction) => {
    
};
*/

// simplify by using installed types/express
import { RequestHandler } from "express";

import { Todo } from '../models/todos';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    // implement typecasting to req.body if the dev knew before hand what type of data is expected
    const text = (req.body as {text:string}).text;
    const newTodo = new Todo(Math.random().toString(), text);

    TODOS.push(newTodo);

    res.status(201).json({message: 'Created the todo.', createTodo: newTodo});
};