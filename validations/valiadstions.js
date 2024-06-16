
import { body } from 'express-validator';

export const postCreateValidation = [
   
    body('title', 'Введіть заголовок!').isLength({ min: 2}).isString(),
    body('text', 'Введіть текст!').isLength({ min: 5}).isString(),
    body('tags', 'Некоректні теги!').isLength({ min: 2}).isArray(),
    body('avatarUrl', 'Некоректне посилання, спробуйте інше!').optional().isURL(),
    
];

export const orderCreateValidation = [   
    body('fullName', 'Введіть як до вас звертатись!').isLength({ min: 2}).isString(),
    body('communication', 'Введіть як з вами звязатись!').isLength({ min: 5}),
    body('description', 'Опишіть своє замовлення(що?, звідки?, куди? ...)!').isLength({ min: 5}).isString(),    
];