const express= require ("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const {createTodo,getAllTodo,deleteTodo,updateTodo} = require("../controllers/Controller");

router.post(
    '/add-todo',
    [
      body('title').notEmpty().withMessage('Title is required').isString().withMessage('Title must be a string').trim(),
      body('brand').notEmpty().withMessage('Brand is required').isString().withMessage('Brand must be a string').trim(),
      body('price').notEmpty().withMessage('Price is required').isNumeric().withMessage('Price must be a number'),
      body('description').notEmpty().withMessage('Description is required').isString().withMessage('Description must be a string').trim(),
      
    ],
    createTodo
  );
router.get('/get-todo',getAllTodo);
router.delete('/delete-todo/:id',deleteTodo);
router.put('/update-todo/:id',
[
    body('title').notEmpty().withMessage('Title is required').isString().withMessage('Title must be a string').trim(),
    body('brand').notEmpty().withMessage('Brand is required').isString().withMessage('Brand must be a string').trim(),
    body('price').notEmpty().withMessage('Price is required').isNumeric().withMessage('Price must be a number'),
    body('description').notEmpty().withMessage('Description is required').isString().withMessage('Description must be a string').trim(),
    
  ]
,updateTodo);

module.exports = router;