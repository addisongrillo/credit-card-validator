import express from 'express';
import validateCreditCardNumberRouter from './routes/validateCreditCardNumber.route';
import bodyParser from 'body-parser'
const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
    res.json({'message': 'API is Running'});
});

app.use('/validate-credit-card-number', validateCreditCardNumberRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});
    
    return;
  });

export default app