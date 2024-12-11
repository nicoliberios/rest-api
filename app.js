require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Nicolas from node.js with framework EXPRESS');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor REST API corriendo en http://localhost:${PORT}`);
});

