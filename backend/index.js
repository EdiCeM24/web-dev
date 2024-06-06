const express = require('express');

const app = express();

app.send = ('/', (_req, res) => {
    res.send('It works!')
});

app.listen(3000, () => {
    console.log('server serves at http://localhost:3000');
});
