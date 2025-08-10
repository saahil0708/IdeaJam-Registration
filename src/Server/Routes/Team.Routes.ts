import { createTeam } from "../Controllers/Team.Controller.ts";
import express from 'express';
const router = express.Router();

router.post('/', createTeam);

export default router;
