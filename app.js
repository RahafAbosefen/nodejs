const axios = require('axios');
const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {

    const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/rattata');
    const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/entei');
    const data = [poke1.data, poke2.data, poke3.data];
    res.render('index', { data });
 
});
app.listen(3000);

