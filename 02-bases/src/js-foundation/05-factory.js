const buildMakePerson = ({ getUUID, getAge }) => {
	return ({ name, birthday }) => {
		return {
			id: getUUID(),
			name: name,
			birthday: birthday,
			age: getAge(birthday),
		};
	};
};

// const obj = { name: "John", birthday: "1978-12-04" };
// const jhon = BuildPerson(obj);
// console.table({ jhon });

module.exports = {
	buildMakePerson,
};
