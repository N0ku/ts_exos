//Exo 4
const CelsiusToFahrenheit = (celsius: number): number => {
  return celsius * (9 / 5) + 32;
};

// Exo 5
const filterEvenNumbers = (numbers: number[]): number[] => {
  numbers = numbers.filter((number) => number % 2 === 0);
  return numbers;
};

// Exo 6
interface Pet {
  name: string;
  age: number;
  speak(): string;
}

class Dog implements Pet {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  speak(): string {
    return "Woof!";
  }
}
class Cat implements Pet {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  speak(): string {
    return "Meow!";
  }
}
class Parrot implements Pet {
  name: string;
  age: number;
  words: string[];

  constructor(name: string, age: number, words: string[]) {
    this.name = name;
    this.age = age;
    this.words = words;
  }

  toListWords(string: string[]): string {
    return string.join(",");
  }

  speak(): string {
    return this.toListWords(this.words);
  }

  addWord(word: string): void {
    this.words.push(word);
  }
}

const testAllPets = (): void => {
  const dog = new Dog("Rex", 3);
  const cat = new Cat("Misty", 2);
  const parrot = new Parrot("Kesha", 4, []);
  
  parrot.addWord("I'm");
  parrot.addWord("a");
  parrot.addWord("stupid");
  parrot.addWord("parrot");


  console.log(dog.speak());
  console.log(cat.speak());
  console.log(parrot.speak());
};

testAllPets();

//Exo 7
