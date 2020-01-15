const express = require('express');

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.json({status: "ok"});k
})

app.listen(3000);

// parei no minuto 39