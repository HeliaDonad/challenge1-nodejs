const express = require('express');
const app = express();
const port = 3000;

// homepage route
app.get('/', (req, res) => {
    res.send('Hallo, mijn naam is Helia Donadello');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
