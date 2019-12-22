export const People = [
{
	id: "0",
	name: "Ted",
	age: 23,
	gender: "male"
},
{
	id: "1",
	name: "Tomas",
	age: 20,
	gender: "male"
},
{
	id: "2",
	name: "Nano",
	age: 22,
	gender: "female"
},
{
	id: "3",
	name: "Romain",
	age: 30,
	gender: "male"
}
];

export const getById = id => {
	const filteredPeople = People.filter(person => id === People.id);
	return filteredPeople[0];
}