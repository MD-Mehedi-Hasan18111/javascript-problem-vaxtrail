const vaxTrail = (persons) => {
  // declare array all of classes person
  const A = [];
  const B = [];
  const C = [];
  const D = [];

  // check the age and temperature
  for (let person of persons) {
    if (person.age >= 20 && person.age <= 30 && person.temperature < 100) {
      A.push(person);
    } else if (
      person.age >= 31 &&
      person.age <= 40 &&
      person.temperature < 100
    ) {
      B.push(person);
    } else if (
      person.age >= 41 &&
      person.age <= 50 &&
      person.temperature < 100
    ) {
      C.push(person);
    } else if (person.age > 50 && person.temperature >= 100) {
      D.push(person);
    }
  }

  // sort the person each even age
  const compare = (a, b) => {
    const isEven = (num) => num % 2 === 0;
    if (isEven(a.age) && !isEven(b.age)) {
      return -1;
    }
    if (!isEven(a.age) && isEven(b.age)) {
      return 1;
    }
    return a.age - b.age;
  };

  // calling the check even function
  A.sort(compare);
  B.sort(compare);
  C.sort(compare);
  D.sort(compare);

  // return result from function
  return { A: A, B: B, C: C, D: D };
};

// example testing
const persons = [
    { name: "Sunil", age: 21, temperature: 98 },
    { name: "Biplop", age: 22, temperature: 98 },
    { name: "Paul", age: 37, temperature: 98 },
    { name: "Kabir", age: 34, temperature: 99 },
    {name: "Kat", age: 41, temperature: 98},
    { name: "Rahul", age: 42, temperature: 98 },
    { name: "Nayem", age: 51, temperature: 100 },
    { name: "Sabana", age: 52, temperature: 101 }
];

const result = vaxTrail(persons);
console.log(result);
