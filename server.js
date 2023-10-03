const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000; 
const pokedex = require('./pokedex.js');

app.use(cors());

app.use(express.static(__dirname));

app.get('/api/:identifier', (request, response) => {
    const identifier = request.params.identifier.toLowerCase();
    let pokemonInfo = null;

    if (!isNaN(identifier)) {
        const pokemonNumber = parseInt(identifier);
        if (pokedex[pokemonNumber]) {
            pokemonInfo = pokedex[pokemonNumber];
        }
    } else {
        for (const number in pokedex) {
            const pokemon = pokedex[number];
            if (pokemon.name.toLowerCase() === identifier) {
                pokemonInfo = pokemon;
                break;
            }
        }
    }
    if (pokemonInfo) {
        response.json(pokemonInfo);
    } else {
        response.json({ error: 'Pokemon not found' });
    }
});
app.get('/pokemon/image/:id', (req, res) => {
    const { id } = req.params;
  
    if (pokedex[id]) {
      const imageUrl = pokedex[id].image;
      res.redirect(imageUrl);
    } else {
      res.status(404).send('Pokémon not found');
    }
  });
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
