const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API Ready 🚀' });
});

const productRoutes = require('../src/routes/products.routes');
app.use('/api/products', productRoutes);

const morgan = require('morgan');
app.use(morgan('dev'));

const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', time: new Date().toISOString() });
});

app.listen(3000, () => console.log('Server running on port 3000'));