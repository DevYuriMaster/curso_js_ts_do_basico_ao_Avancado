//Factory

function createPerson(name, lastName, age){
    return{
        name,
        lastName,
        age
    }
}

let person1 = createPerson('Yuri', 'Victor', 23);

console.log(person1.name);