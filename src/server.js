import express from 'express';
import path from 'path';

const app = express();
app.use(express.static(path.join(__dirname, '/build')));

const PORT = process.env.PORT || 8888;
app.listen(PORT, () =>
  console.log(`static server running @ ${PORT}`)
);
