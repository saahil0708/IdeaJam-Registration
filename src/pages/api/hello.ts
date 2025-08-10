import express from 'express';
const app = express();
import dotenv from 'dotenv';
import cors from 'cors';
import TeamRoutes from '../../Server/Routes/Team.Routes.ts';

dotenv.config();

import DB from '../../Server/Config/DB.ts';

DB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
    {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
        allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
        credentials: true,
    }
));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Welcome to IdeaJam 2.0 Backend');
});

app.use('/teams', TeamRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});