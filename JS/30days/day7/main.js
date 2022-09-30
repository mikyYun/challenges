const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good!", id: 823423 },
  { text: "Best in my life", id: 249641 },
  { text: "Nice", id: 523228 },
  { text: 'You are the best', id: 2039842 },
];

// Some and every checks
const isAdult = people.some((person) => ((new Date()).getFullYear()) - person.year >= 19 );

console.log({isAdult});

// Array.prototype.every()
const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log({allAdults})

// Array.prototype.find()
const comment = comments.find(comment => comment.id === 523228);

console.log(comment);

// Array.prototype.findIndex()
const index = comments.findIndex(comment => comment.id === 523423);
console.log(index);

// splice
comments.splice(index, 1);
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
]
console.log(newComments)