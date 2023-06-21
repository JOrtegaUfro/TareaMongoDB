import express from 'express';
import userRouter from './routes/users.routes.js';
import authRouter from './routes/auth.routers.js';
import messageRouter from './routes/messages.routes.js';
import { PORT } from './configs/environments.js'
import connectDB from './configs/mongo.js';


const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(201).send('Javier Ortega');
});
app.use("/auth",authRouter);
app.use("/users",userRouter);
app.use("/messages",messageRouter);


async function startSever() {
	const isConnected = await connectDB();
	if (isConnected) {
		app.listen(PORT, () => {
			console.log(`Server started on ${PORT}`);
		});
	} else {
		process.exit();
	}
}

startSever();