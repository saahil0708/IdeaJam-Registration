import { createTeam } from "../Controllers/Team.Controller";
import express from 'express';
const router = express.Router();

router.post('/', createTeam);

export default router;
