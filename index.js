import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './routes/users.js';

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use('/users', userRoutes);

app.get('/',(req,res) => {
    res.send('Presenting my Trial API for CRUD functions')
});

app.listen(PORT, () => {
    console.log('Server is running on port: http://localhost:' + PORT);
});