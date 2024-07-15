const users = [
	{ name: "Ivan", id: 1 },
	{ name: "Leonardo", id: 2 },
	{ name: "Marta", id: 3 },
	{ name: "Juna", id: 4 },
];

function getUsersById(id, callback) {
	const user = users.find((user) => {
		if (user.id === id) {
			return user;
		}
	});
	if (!user) {
		return callback(new Error("USUARIO NO ESTA", id));
	}

	return callback(null, user);
}

module.exports = exports = {
	getUsersById,
};
