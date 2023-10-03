const fetchButton = document.getElementById('fetchButton');
const pokemonInput = document.getElementById('pokemonInput');
const pokemonInfoDiv = document.getElementById('pokemonInfo');

fetchButton.addEventListener('click', () => {
    const pokemonIdentifier = pokemonInput.value.trim().toLowerCase();
    if (pokemonIdentifier) {
        fetch(`/api/${pokemonIdentifier}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    pokemonInfoDiv.textContent = `Pokemon not found: ${pokemonIdentifier}`;
                } else {
                    const { name, type, abilities } = data;
                    pokemonInfoDiv.innerHTML = `
                        <h2>${name}</h2>
                        <p><strong>Type:</strong> ${type.join(', ')}</p>
                        <p><strong>Abilities:</strong> ${abilities.join(', ')}</p>
                        <img src="${data.image}" alt="${data.name}">
                    `;
                    pokemonInfoDiv.style.display = 'block';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                pokemonInfoDiv.textContent = 'An error occurred while fetching Pokémon data.';
            });
    }
});

