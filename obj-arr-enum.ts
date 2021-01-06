// const person: {
// 	name: string;
// 	age: number;
// } = {
// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string];
// } = {
// 	name: 'Marga',
// 	age: 15,
// 	hobbies: ['Reading', 'Dancing'],
// 	role: [2, 'author'],
// };

enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}

const person = {
	name: 'Marga',
	age: 15,
	hobbies: ['Reading', 'Dancing'],
	role: Role.ADMIN,
};

let activities: string[];
activities = ['Reading', 'Dancing'];

let favoriteActivities: any[];
favoriteActivities = ['Reading', 'Dancing'];
console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
	console.log('Is Author');
}
