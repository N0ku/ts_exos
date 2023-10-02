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
class Queue<T> {
    private elements: T[];
    
    constructor(elements: T[]) {
        this.elements = elements;
    }

    enqueue(element: T): void {
        this.elements.push(element);
    }

    dequeue(): T | null {
        const e = this.elements.shift();
        if(!e) return null;
        return e;
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    size(): number {
        return this.elements.length;
    }
}

const testQueue = (): void => {
    const queue = new Queue<number>([1, 2, 3]);
    console.log(queue.size());
    console.log(queue.dequeue());
    console.log(queue.dequeue());
    console.log(queue.isEmpty());

    const queue2 = new Queue<string>(["a", "b", "c"]);
    console.log(queue2.size());
    console.log(queue2.dequeue());
    console.log(queue2.dequeue());
    console.log(queue2.isEmpty());

    const queue3 = new Queue<boolean>([true, false, true]);
    console.log(queue3.size());
    console.log(queue3.dequeue());
    console.log(queue3.dequeue());
    console.log(queue3.isEmpty());
}

testQueue();

//Exo 8