class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
}

class Mammal extends Animal {
  constructor(name, species, furColor) {
    super(name, species);
    this.furColor = furColor;
  }
}

class Bird extends Animal {
  constructor(name, species, wingSpan) {
    super(name, species);
    this.wingSpan = wingSpan;
  }
}

class Reptile extends Animal {
  constructor(name, species, scaleType) {
    super(name, species);
    this.scaleType = scaleType;
  }
}

class Zoo {
  constructor(animals) {
    this.animals = [];
  }

  addAnimal(animal) {
    return this.animals.push(animal);
  }

  listAnimals() {
    return console.log(this.animals);
  }

  getAnimalsBySpecies(species) {
    return console.log(
      this.animals.filter((animal) => animal.species === species)
    );
  }

  remove_animal(name) {
    this.animals.map((animal) => {
      let animalIndex = this.animals.indexOf(animal);
      if (animal.name === name) {
        this.animals.splice(animalIndex, 1);
      }
    });
    return this.animals;
  }

  countAnimals() {
    return this.animals.length;
  }
}

const zoo = new Zoo();

const rat = new Mammal("Scabbers", "Rat", "Gray");
const owl = new Bird("Hedwig", "Owl", 1.5);
const snake = new Reptile("Nagini", "Snake", "Smooth");
const lion = new Mammal("Alex", "Lion", "Golden");
const penguin = new Bird("Skipper", "Penguin", 0.5);
const chameleon = new Reptile("Rango", "Chameleon", "Smooth");
const panther = new Mammal("Bagheera", "Black Panther", "Black");
const lion2 = new Mammal("Simba", "Lion", "Golden");
const hummingbird = new Bird("Gutini", "Hummingbird", 0.1);
const python = new Reptile("Kaa", "Python", "Smooth");

zoo.addAnimal(rat);
zoo.addAnimal(owl);
zoo.addAnimal(snake);
zoo.addAnimal(lion);
zoo.addAnimal(penguin);
zoo.addAnimal(chameleon);
zoo.addAnimal(panther);
zoo.addAnimal(lion2);
zoo.addAnimal(hummingbird);
zoo.addAnimal(python);

zoo.listAnimals();
zoo.getAnimalsBySpecies("Lion");
console.log(zoo.remove_animal("Alex"));
console.log(zoo.countAnimals());
