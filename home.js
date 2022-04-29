console.log('hello');
//alert('hello this is shreya');

// HOw to write comment inline

// variables
var b='smoothie'; 
console.log(b);


var someNumber = 45;
// console.log(someNumber);


// Manipulate DOM with Javascript
/*...It's just a fanncy way of saying change HTML with Jvascript*/

// var age = prompt('what is your age?');


// document.getElementById('someText').innerHTML = age;


//Number in Javascript
var num1 = 10;


// Increment num1 by 1
num1++;

//Decrement num1 by 1
num1--;
console.log(num1);

//Divide, Multiply*, Reminder%
console.log(num1 % 6);

// Increment/decrement by 10
num1 += 10;
console.log(num1);

/* Functions
1 .Create a function
2. Call the function
*/
// Create 
 function fun() {
     alert('this is a function');
 }

  // Call 
  fun();

  /* Let's create a function that take a name and says helo folllowed by your name
  

  For Example


  Name: "Shreya"
  Return: "Hello Shreya"
  */


  function greeting(yourName) {
     
      var result = 'Hello' + ' ' + yourName; // String Concatenaion
      console.log(result);
  }
  var name = prompt('What is your name?'); 
   greeting(name);

  // HOw do argumenrs work in function?
  // How do we add 2 numbers together in a function?

   function sumNumbers(num1, num2){ 
       var result = num1 + num2;
       console.log(num1 + num2);

   }

   sumNumbers(10, 10);

   /* while loops

    var num = 0;

    while (num<100){
        num += 1;
        console.log(num);
    }
   */

   // For loop
   for (let num = 0; num<=100; num++){
       console.log(num);
   }

   // Data Types
    let yourAge = 21;                                              // number
    let yourName = 'piya';                                         // String
   /* let name = {first: 'Hari', last: 'Khadka'};                 // object
    let truth = false;                                           // boolean
    let groceries = ['apple', 'banana', 'oranges'];             // array
    let random;                                                //undefined
    let nothing = null;  */                                   // value null

    // String in Javascript (common methods)
    let fruit = 'banana,berry,apple,orange';
    let morefruits  = 'banana\napple';                        // new line
    console.log(fruit.length);
    console.log(fruit.indexOf('an'));
    console.log(fruit.slice(2, 6));
    console.log(fruit.replace('ban', '123'));
    console.log(fruit.toUpperCase(fruit));
    console.log(fruit.toLowerCase(fruit));
    console.log(fruit.charAt(2));
    console.log(fruit.split(''));                        // spli by character
    console.log(fruit.split(','));                      // split by a comma

    // Array
    let fruist = ['banana','apple,oranges','pineapples'];
     fruits = new Array('banana', 'apple', 'oranges', 'pineapples');


    console.log(fruits[2]);                           // acessvalue at index 2nd
    fruits[0] = 'pear';
    console.log(fruits);

    for (let i = 0; i<fruits.length; i++){
        console.log(fruits[i]);
    }



    // array common methods
    console.log('to string', fruits.toString());
    console.log(fruits.join(' * '));
    console.log(fruits.pop(), fruits);                 // Remove the last items
    console.log(fruits.push('blackberries'), fruits);  // appends
     console.log(fruits[4]);
     fruits[fruits.length] = 'new fruit'; // same as push
     console.log(fruits)
     fruits.shift();               // remove the first element from the array
     console.log(fruits)
fruits.unshift('kiwi');           // add first element to an array
let vegetables = ['asparagus', 'tomato', 'brocoli'];
let allGroceries = fruits.concat(vegetables);    // combine arrays 
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());


let someNumbers = [5,25,2,25,3,255,1,2,5,334,,321,7];
console.log(someNumbers.sort());
console.log(someNumbers.sort(function(a, b) {return a-b})); // sorted in ascending order
console.log(someNumbers.sort(function(a, b) {return b-a})); // sorted in descending order

  let emptyArray = new Array();
  for (let num = 0; num <= 10; num++){
      emptyArray.push(num);
  }
  console.log(emptyArray); 
  
   // Object in Javascript
   // Dictionaries in Python

   let student = {
       first: 'Rashu',
        last: 'Khadka',
         age:24,
          height:150,
          studentInfo: function (){
              return this.first + '\n' + this.last + "\n" + this.age;
          }
        };


  // console.log(student.first);
  // console.log(student.last);
  // student.first = 'notRashu';  // change value
// console.log(student.first);
   student.age++;
   console.log(student.age);
   console.log(student.studentInfo());

    // Conditionals, Control flows (if else)
    // 18-35 is my target demographic
    // && AND
    // ||OR
    var age = 25;
    if ( (age >= 18) && (age <= 35) ) {
        status = 'target demo';
   }
   else{
       status = 'not my audience';
   }

     // switch statement
     // differentiate between weekday vs. weekend
     // day 0 --> Sunday --> weekend
     // day 1 --> monday --> weekend
     // day 2 --> Tuesday
     // day 3 --> Wednesday
     // day 4 --> Thursday --> weekday
     // day 5 -->Friday --> weekend 
     // day 6 --> Saturday --> weekend
     
     switch (6) {
         case 0:
           text = 'weekend';
           break;
         case 5:
             text = 'weekend'
             break
         case 6:
             text = 'weekend'
             break;

             default:
                 text = 'weekday'
     }
      console.log(text);
  
  
 


