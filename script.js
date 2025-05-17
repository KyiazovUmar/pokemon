const container = document.getElementById("pokemon-container");

const pokemonIds = [1, 2, 3, 11, 12, 13]; // bulbasaur, ivysaur, venusaur, metapod, butterfree, weedle

pokemonIds.forEach((id) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <h3>${data.name}</h3>
      `;
      container.appendChild(card);
    });
});