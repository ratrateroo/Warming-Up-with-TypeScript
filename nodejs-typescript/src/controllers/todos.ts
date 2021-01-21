//import { Request, Response, NextFunction } from 'express';
import { RequestHandler } from 'express';

import { Todo } from '../models/todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
	const text = (req.body as { text: string }).text;
	const newTodo = new Todo(Math.random().toString(), text);

	TODOS.push(newTodo);
	console.log(newTodo);

	res.status(201).json({ message: 'Created the todo.', createdTodo: newTodo });
};
