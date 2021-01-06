// const person: {
// 	name: string;
// 	age: number;
// } = {
const person: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string];
} = {
	name: 'Marga',
	age: 15,
	hobbies: ['Reading', 'Dancing'],
	role: [2, 'author'],
};

let activities: string[];
activities = ['Reading', 'Dancing'];
console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}
