import express from 'express';
import { readUsers, createUser, readUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

router.post('/', createUser);

router.get('/', readUsers);

router.get('/:id', readUser);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;