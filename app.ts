// const person: {
// 	name: string;
// 	age: number;
// } = {
const person = {
	name: 'Marga',
	age: 15,
	hobbies: ['Reading', 'Dancing'],
};

let activities: string[];
activities = ['Reading', 'Dancing'];
console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}
