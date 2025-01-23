import express from 'express';
import routes from './routes/router.js'
import cors from 'cors'

const PORT = 8081;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(cors());

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na URL http://localhost:${PORT}`);
});
