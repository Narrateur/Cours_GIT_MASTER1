console.log('Hello World');

const operand = 12;
const operand2 = 45;

let result = operand + operand2;

console.log("resultat de" + operand + "+" + operand2 + "=" + result);


// on peut également déclarer et initialiser un objet de la façon suivante :

let aPerson= new Object();
aPerson.name = 'Jean';
aPerson.age = 35;
aPerson.gender = 'masculin';
aPerson.interest = ['musique', 'badminton'];

aPerson.sayHello = function() {console.log('Bonjour ! Je suis ' + this.name + '.'); };

aPerson.sayHello();