const express = require('express');

const app = express()

app.get('/',(req,res) => res.send('Hello world with express'))

app.listen(3000);
console.log('Hello World on Port 3000')