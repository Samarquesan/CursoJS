class animal
{
    name;
    age;
}

//Array
var lion = new Object();
lion.name = 'Lion';
lion.age = 6;

var monkey = new Object();
monkey.name = 'Monkey';
monkey.age = 10;

var elephant = new Object();
elephant.name = 'Elephant';
elephant.age = 13;

var lion2 = new animal()
lion2.name = 'lion2'
lion2.age = 20


var animals = [];
animals.push(lion);
animals.push(monkey);
animals.push(elephant);
animals.push(lion2)


/*var animals = []
    {nome= 'Lion',
     age= 6
    }
    {
        nome= 'Monkey',
        age= 10
    }
    {
        nome= 'Elephant',
     age= 13
    }*/

// acessar valores dentro do array 
console.log(animals[3].name)


