/*
import { Request, Response, NextFunction } from "express";

export const createTodo = (req: Request, res: Response, next: NextFunction) => {
    
};
*/

// simplify by using installed types/express
import { RequestHandler } from "express";

import { Todo } from '../models/todos';
import { text } from "body-parser";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    // implement typecasting to req.body if the dev knew before hand what type of data is expected
    const text = (req.body as {text:string}).text;
    const newTodo = new Todo(Math.random().toString(), text);

    TODOS.push(newTodo);

    res.status(201).json({message: 'Created the todo.', createTodo: newTodo});
};

export const getTodo: RequestHandler = (req, res, next) => {
    res.json({todos: TODOS});
};

// implement typescript support for req.params via RequestHandler<>
export const updateTodo: RequestHandler<{id:string}> = (req, res, next) => {
    const todoId = req.params.id;

    // implement typecasting to req.body if the dev knew before hand what type of data is expected
    const updatedText = (req.body as {text:string}).text;

    const todoIndex = TODOS.findIndex( todo => todo.id === todoId);

    // if todoIndex value is -1 or lesser, means did not find the id or something went wrong
    if (todoIndex <0){
        throw new Error('Could not find the id!.')
    }

    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);

    res.json({message: 'Updated!', updateTodo: TODOS[todoIndex]});
};

export const deleteTodo: RequestHandler = (req, res, next) =>{
    const todoId = req.params.id;

    const todoIndex = TODOS.findIndex( todo => todo.id === todoId);

    // if todoIndex value is -1 or lesser, means did not find the id or something went wrong
    if (todoIndex <0){
        throw new Error('Could not find the id!.')
    }

    TODOS.splice(todoIndex, 1);

    res.json({message: 'Todo deleted!.'})
};