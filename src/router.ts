import {Router} from 'express';
import { body, oneOf, validationResult } from 'express-validator';
import { hanldeErrors } from './modules/middleware';

const router = Router();

/**
 * Product
 */
router.get('/product',(req,res)=>{
    res.json({message:req.secrect});
});
router.get('/product/:id',()=>{});
router.post('/product',body('name').isString(),hanldeErrors,(req,res)=>{
    
});
router.put('/product/:id',body('name').isString(),hanldeErrors,()=>{});
router.delete('/product/:id',()=>{});

/**
 * Upadte
 */
router.get('/update',()=>{});
router.get('update/:id',()=>{});
router.post('/update',
body('title').exists().isString(),
body('body').exists().isString(),
()=>{});
router.put('update/:id',
body('title').optional(),
body('body').optional(),
body('status').isIn(['IN_PROGRESS','SHIPPED','DEPRICATED']),
body('version').optional,
()=>{});
router.delete('update/:id',()=>{});

/**
 * Upadte Point
 */
router.get('/updatepoint',()=>{});
router.get('/updatepoint/:id',()=>{});
router.post('/updatepoint',
body('name').isString(),
body('description').isString(),
body('updateId').exists().isString(),
()=>{});
router.put('/updatepoint/:id',
body('name').optional().isString(),
body('description').optional().isString(),
()=>{});
router.delete('/updatepoint/:id',()=>{});

export default router;