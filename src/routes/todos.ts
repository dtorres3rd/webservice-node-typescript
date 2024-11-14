/*
dev note: code from node.js when importing route
 const express = require('express');
 const Router = express.Router;
*/

import { Router } from "express";

import { createTodo } from "../controllers/todos";

const router = Router();

router.post('/', createTodo);

router.get('/');

router.patch('/:id');

router.delete('/:id');

export default router;