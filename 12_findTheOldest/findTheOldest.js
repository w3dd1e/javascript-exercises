const findTheOldest = function (people) {
    for (let item of people) {
        if (item.yearOfDeath === undefined) {
            item.yearOfDeath = 2025
        }
    }
    let compareYears = (a, b) => {
        if (Math.abs(a.yearOfDeath - a.yearOfBirth) > Math.abs(b.yearOfDeath - b.yearOfBirth)) return 1;
        if (Math.abs(a.yearOfDeath - a.yearOfBirth) === Math.abs(b.yearOfDeath - b.yearOfBirth)) return 0;
        if (Math.abs(a.yearOfDeath - a.yearOfBirth) < Math.abs(b.yearOfDeath - b.yearOfBirth)) return -1;
    }

    people.sort(compareYears);
    return people[people.length - 1];
};
// Do not edit below this line
module.exports = findTheOldest;
