import {Router} from 'express';
import { body, oneOf, validationResult } from 'express-validator';
import { hanldeErrors } from './modules/middleware';
import { getOneProduct, getProducts,createProduct, deleteProduct, updateProduct } from './handlers/product';
import { createUpdate, deleteUpdate, getOneUpdates, getUpdates, updateUpdate } from './handlers/update';

const router = Router();

/**
 * Product
 */
router.get('/product',getProducts);
router.get('/product/:id',getOneProduct);
router.post('/product',body('name').isString(),hanldeErrors,createProduct);
router.put('/product/:id',body('name').isString(),hanldeErrors,updateProduct);
router.delete('/product/:id',deleteProduct);

/**
 * Upadte
 */
router.get('/update',getUpdates);
router.get('update/:id',getOneUpdates);
router.post('/update',
body('title').exists().isString(),
body('body').exists().isString(),
body('productId').exists().isString(),
createUpdate
);
router.put('update/:id',
body('title').optional(),
body('body').optional(),
body('status').isIn(['IN_PROGRESS','SHIPPED','DEPRICATED']).optional(),
body('version').optional,
updateUpdate
);
router.delete('update/:id',deleteUpdate);

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