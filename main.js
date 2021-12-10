const express = require('express');
const serveStatic = require('serve-static');
const app = express();
const path = require('path');
const port = 3200;

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.use(serveStatic(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log('SERVER RUNNING on PORT 3200');
});