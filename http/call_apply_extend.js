function Pet(words) {
    this.words = words
    this.speak = function () {
        console.log(this.words)
    }
}

function Dog(words) {
    Pet.call(this, words);
    //Pet.apply(this, arguments)
}

var dog = new Dog('Wang');

dog.speak();

/*
function Pet(words) {
    this.words = words
    this.speak = function () {
        console.log(this.words)
    }
}

function Dog(words) {
    Pet.call(this, words)
}

Dog.speak = function () {
    Pet.speak.call(this)
    console.log('Miao')
}

var dog = new Dog('Wang')
dog.speak()*/
