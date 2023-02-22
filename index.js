// var numbers = [1, 2, 3, 4];
//  var new_numbers = [];
//  for(var i = 0; i < numbers.length; i++) {
//  new_numbers[i] = numbers[i] * 2;
//  }
//  console.log("Les nombres doublés sont", new_numbers); // [2, 4, 6, 8]


// var numbers = [1,2,3,4];


// var new_numbers = numbers.map(number => number * 2)

// console.log(new_numbers);


// var tab = [1,2,3,4];

// var news_tab = [];

// for(let i = 0 ; i < tab.length ; i++){
// if(tab[i] > 2){
//       news_tab[i] = tab[i]
// }
// }
// console.log(news_tab);

// let tab = [1,2,3,4];

// let new_tab = tab.filter(function(number){
//     return number > 0;
// });

// console.log(new_tab);




var numbers = [1, 2, 3, 4];
 var total_number = numbers.map(function(number){
 return number * 3;
 }).reduce(function(total, number){return total + number;}, 0);
console.log("Le total est", total_number);
 

