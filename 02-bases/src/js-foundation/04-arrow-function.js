const users = [
	{ name: "Ivan", id: 1 },
	{ name: "Leonardo", id: 2 },
	{ name: "Marta", id: 3 },
	{ name: "Juna", id: 4 },
];

const getUsersById = (id, callback) => {
	const user = users.find((user) => user.id === id);
	user ? callback(null, user) : callback(new Error("USUARIO NO ESTA", id));
};

module.exports = exports = {
	getUsersById,
};
