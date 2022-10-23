const person = {
    name:  'maxine',
    age: 22,
    address: {
            city: 'London',
            postcode: 'E1 123'
        },
    hobbies: ['writing','tennis','cooking']
};
console.log(person['address'].city)
console.log(person.hobbies[1])