// server.js
const express = require('express');
const next = require('next');
const fs = require('fs');
const ejs = require('ejs');
const qs = require('querystring');
const { join } = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const maxNum = 10;
const filename = 'mydata.txt';
let messageData = [];

function readFromFile(fname, callback) {
  fs.readFile(fname, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    messageData = data.split('\n').filter(Boolean);
    if (callback && typeof callback === 'function') {
      callback();
    }
  });
}

function addToData(id, msg, fname, request) {
  const obj = { id, msg };
  const objStr = JSON.stringify(obj);
  console.log('add data: ' + objStr);
  messageData.unshift(objStr);
  if (messageData.length > maxNum) {
    messageData.pop();
  }
  saveToFile(fname);
}

function saveToFile(fname) {
  const dataStr = messageData.join('\n');
  fs.writeFile(fname, dataStr, (err) => {
    if (err) throw err;
  });
}

app.prepare().then(() => {
  const server = express();

  server.use(express.urlencoded({ extended: true }));

  server.post('/', (req, res) => {
    const { id, msg } = req.body;
    addToData(id, msg, filename, req);
    readFromFile(filename, () => {
      app.render(req, res, '/', req.query);
    });
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT || 3004, () => {
    console.log('Server start!');
  });
});
