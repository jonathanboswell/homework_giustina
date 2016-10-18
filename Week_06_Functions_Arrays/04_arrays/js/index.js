//Initialize Array
var cities = ['New York','Los Angeles','San Francisco'];
console.log("Initial Array", cities);

//Add a city
cities[3] = 'Miami';
cities[4] = 'Seattle';
console.log("With a new city", cities);

//Reassign cities
var cities2 = ["Santa Monica","Malibu"];
cities = cities2;
console.log("Override cities", cities);

//How many cities are there?
console.log(cities.length);

//What is the first city?
console.log(cities[0])

//How can I add a city if I don't know how many cities there are?
cities.push('Seattle');
console.log(cities);

//Is there a quick way to show each array item?
//That is a GREAT question and the answer is YES :)

for(var index = 0; index < cities.length; index = index + 1)
{
    console.log(cities[index]);
}

//which is a quick way of saying
//for(starting variable; while this is true; increment variable)

//That's a lot to remember...is there a quicker way?
//Of course...you just gotta use an anonymous function! :)
//Sweet! Anonymous functions are the BEST!!!

cities.forEach(function(value,index){
    console.log(index, value);
})

//Seems like arrays are awesome?
//Totes
//So where can I look up all the cool stuff I can do with arrays?
console.log('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array');

