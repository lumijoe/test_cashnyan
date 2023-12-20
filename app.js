// app.js(Expressサーバーの準備)

const express = require('express');
const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
  // サンプルデータを返す
  const data = [
    { name: 'John', amount: 100, item: 'Item A' },
    { name: 'Jane', amount: 200, item: 'Item B' },
    // 他のデータ...
  ];
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});