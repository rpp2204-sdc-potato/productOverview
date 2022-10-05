const express = require('express');
const controller = require('./controllers/controllers');
// const authentication = require('./middleware/authentication');

const app = express();

app.use(express.json());

app.get('/products', (req, res) => {
  controller.getProducts(req, res);
});

app.get('/products/:product_id', (req, res) => {
  controller.getProduct(req, res);
});

app.get('/products/:product_id/styles', (req, res) => {
  controller.getProductStyle(req, res);
});

app.get('/products/:product_id/related', (req, res) => {
  controller.getRelated(req, res);
});

app.get('/cart', (req, res) => {
  controller.getCart(req, res);
});

app.post('/cart', (req, res) => {
  controller.postCart(req, res);
});

module.exports = app;