const findTheOldest = function(x) {
    const currentYear = new Date().getFullYear();
    const people = [];

    x.forEach(person => {
        let personAge = 0;
        if (person.yearOfDeath == undefined) {
            personAge = currentYear - person.yearOfBirth;
        } else {
            personAge = person.yearOfDeath - person.yearOfBirth;
        }
        const personObject = {
            name: person.name,
            age: personAge
        };
        
        people.push(personObject);  
    });

    const maxAge = Math.max(...people.map(person => person.age));
    const personWithMaxAge = people.find(person => person.age === maxAge);

    const nameOfMaxAge = personWithMaxAge.name;
    let name = [];
    name.push(nameOfMaxAge);
    console.log(name[0]);
    return name[0];
};

// Do not edit below this line
module.exports = findTheOldest;
