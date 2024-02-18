require('dotenv').config();
require('express-async-errors');
const cors=require('cors');
const express = require('express');
const app = express();
const fs = require('fs').promises;  // Using fs.promises for asynchronous file reading
const path = require('path');
const customers=require('./routes/customers')
const connectDB=require('./db/connect')
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(cors());
app.use(express.static('./public'));
app.use(express.json());

// routers
app.use('/api/v1/customers',customers)

app.get('/customers', async (req, res) => {
  try {
    const customersHtml = await fs.readFile(path.join(__dirname, 'public', 'customers.html'), 'utf-8');
    res.send(customersHtml);
  } catch (error) {
    console.error('Error reading customers.html:', error);
    res.status(500).send('Internal Server Error');
  }
})
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    console.log("connected to database")
    app.listen(port, () =>
    
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
