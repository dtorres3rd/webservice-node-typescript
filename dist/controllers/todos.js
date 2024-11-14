"use strict";
/*
import { Request, Response, NextFunction } from "express";

export const createTodo = (req: Request, res: Response, next: NextFunction) => {
    
};
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todos_1 = require("../models/todos");
const TODOS = [];
const createTodo = (req, res, next) => {
    // implement typecasting to req.body if the dev knew before hand what type of data is expected
    const text = req.body.text;
    const newTodo = new todos_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Created the todo.', createTodo: newTodo });
};
exports.createTodo = createTodo;
