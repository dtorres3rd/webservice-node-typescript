"use strict";
/*
import { Request, Response, NextFunction } from "express";

export const createTodo = (req: Request, res: Response, next: NextFunction) => {
    
};
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.createTodo = void 0;
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
const getTodo = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodo = getTodo;
// implement typescript support for req.params via RequestHandler<>
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    // implement typecasting to req.body if the dev knew before hand what type of data is expected
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    // if todoIndex value is -1 or lesser, means did not find the id or something went wrong
    if (todoIndex < 0) {
        throw new Error('Could not find the id!.');
    }
    TODOS[todoIndex] = new todos_1.Todo(TODOS[todoIndex].id, updatedText);
    res.json({ message: 'Updated!', updateTodo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    // if todoIndex value is -1 or lesser, means did not find the id or something went wrong
    if (todoIndex < 0) {
        throw new Error('Could not find the id!.');
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: 'Todo deleted!.' });
};
exports.deleteTodo = deleteTodo;
