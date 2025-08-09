import express from 'express';
const app = express();
import dotenv from 'dotenv';

dotenv.config();

import DB from '../../Server/Config/DB.ts';

DB();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Welcome to IdeaJam 2.0 Backend');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});