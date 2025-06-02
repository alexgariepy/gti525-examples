const students = [
  { name: 'Éléonore', score: 85 },
  { name: 'Antoine', score: 70 },
  { name: 'Camille', score: 95 },
  { name: 'Léa', score: 60 }
];

const array = students.filter( (value) => value.score > 80)

const topStudents = array.map( (values) => values.name)

console.log(topStudents); // Affiche : ['Éléonore', 'Camille']