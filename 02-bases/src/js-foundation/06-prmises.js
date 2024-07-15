const { http } = require("../plugin/index");

const getPokmenoById = async (id) => {
	const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const pokemon = await http.get(URL);
	return pokemon.name;
};

module.exports = getPokmenoById;
