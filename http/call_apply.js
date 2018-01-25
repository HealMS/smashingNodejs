var pet = {
    words: '...',
    speak: function (say) {
        console.log(say + ' ' + this.words)
    }
}

pet.speak('Speak')


var dog = {
    words: 'Wang'
}

//this指向它所属的
pet.speak.call(dog, 'Speak')
//等同于
pet.speak.apply(dog, ['Speak'])
