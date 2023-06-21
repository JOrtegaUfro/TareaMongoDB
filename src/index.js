import express from 'express';
import userRouter from './routes/users.routes.js';
import authRouter from './routes/auth.routers.js';
import messageRouter from './routes/messages.routes.js';


const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(201).send('Javier Ortega');
});
app.use("/auth",authRouter);
app.use("/users",userRouter);
app.use("/messages",messageRouter);


app.listen(3000, () => {
  console.log('Iniciado en el puerto 3000!');
});