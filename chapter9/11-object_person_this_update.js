const person = {
    name: 'Alice',
    greet: function(){
        console.log(`こんにちは、私は${name}です。`);
    }
}

person.name = 'Bob';
person.greet();