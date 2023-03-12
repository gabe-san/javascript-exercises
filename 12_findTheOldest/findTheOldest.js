
// not efficient for 2nd and 3rd tests due to O(n) complexity, better to use reduce() for subsequent tests
// const findTheOldest = function(people) {
//         people.sort(function(a,b) {
//         const lastGuy = a.yearOfDeath - a.yearOfBirth;
//         const nextGuy = b.yearOfDeath - b.yearOfBirth;
//         return lastGuy > nextGuy ? -1 : 1;
//     });
//     return people[0];
// };

const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    return people.reduce((res, person) => {
        const age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        return age > res.age ? {person, age} : res;  
    }, {person: null, age: 0 }).person;
}



// Do not edit below this line
module.exports = findTheOldest;
