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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Marga',
    age: 15,
    hobbies: ['Reading', 'Dancing'],
    role: Role.ADMIN
};
var activities;
activities = ['Reading', 'Dancing'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log('Is Author');
}
