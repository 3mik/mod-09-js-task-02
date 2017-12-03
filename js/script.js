var femaleNames = ['Alicja', 'Magdalena', 'Emilia', 'Monika'];
var maleNames = ['Krzysztof', 'Bogusław', 'Piotr', 'Marek'];

var allNames = femaleNames.concat(maleNames);
var newName = prompt('Podaj imię (męskie lub żeńskie)');

if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
    console.log('Dodano nowe imię: ' + allNames[allNames.length-1]);
} else console.log('Takie imię już istnieje');