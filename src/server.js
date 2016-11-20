import express from 'express';
import path from 'path';

const app = express();
app.use(express.static(path.join(__dirname, '/build')));

app.listen(3000, () =>
  console.log('running at 3000')
);
