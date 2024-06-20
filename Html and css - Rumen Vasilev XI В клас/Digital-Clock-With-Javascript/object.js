const people = 
[
    person = {
        name: 'John',
        nation: 'USA',
        age: 35,
        favouriteColors: ['Blue', 'Red', 'Green', 'Orange']
    },

    person2 = {
        name: 'Peter',
        nation: 'Canada',
        age: 25,
        favouriteColors: ['Blue', 'Red', 'Green', 'Orange']
    },

    person3 = {
        name: 'Helen',
        nation: 'UK',
        age: 28,
        favouriteColors: ['Blue', 'Red', 'Green', 'Orange']
    }
];

for (const person of people) {
    console.log(person);
}

let i = 0;
for (const person of people) {
    console.log(person.name + ' : ' + person.favouriteColors[i]);
    i++;
}

class Person {
    
    constructor (name, nation, age) {
        this.name = name;
        this.nation = nation;
        this.age = age;
    }

}

const gosho = new Person('Gosho', 'USA', 12);
const peter = new Person('Peter', 'Canada', 25);
const helen = new Person('Helen', 'UK', 28);
const rosen = new Person('Rosen', 'Shemshevo', 18);

console.log(gosho);
console.log(peter);
console.log(helen);
console.log(rosen);