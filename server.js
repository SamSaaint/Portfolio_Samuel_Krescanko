const express = require("express");
const app = express();
const PORT = 3000;

const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use('/', (req,res)=>res.sendFile(path.join(__dirname + '/express/index.html')));

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`));