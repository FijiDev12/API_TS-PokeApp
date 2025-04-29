import express from 'express';
import paymentRoutes from './routes/payments-ext.routes';

const app = express();

app.use(express.json());

app.use('/api', paymentRoutes);

export default app;