import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { router as coursesRoutes } from './routes/coursesRoutes.js';
import { router as usersRoutes } from './routes/usersRoutes.js';
import { router as rolesRoutes } from './routes/rolesRouter.js';


const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
    credentials: true
};

const app = express();
const PORT = 8000;
app.use(cors(
    corsOptions
));
app.use(bodyParser.json());

app.use('/api', coursesRoutes);
app.use('/api', usersRoutes);
app.use('/api', rolesRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




