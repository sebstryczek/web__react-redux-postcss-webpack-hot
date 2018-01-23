import path from 'path';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '_index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
