import { Router } from 'express';
import { getRoleByCode, getRoles } from '../controller/rolesController.js';
const router = Router();

router.get('/roles', getRoles);
router.get('/roles/:code', getRoleByCode);

export {
    router
}

