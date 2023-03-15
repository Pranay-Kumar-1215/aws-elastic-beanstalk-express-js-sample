const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('So, the first aws project is completed and the pipeline deployment is also complete'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
