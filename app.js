// Question 1:
// Create an array of 5 fruits and display the array.

let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];
console.log(fruits);



// Question 2:
// Create an array of 5 student names and display the third student.

let students = ["Ali", "Ahmed", "Sara", "Ayesha", "Hamza"];
console.log(students[2]);



// Question 3:
// Add a new city at the end of an array using push().

let cities = ["Karachi", "Lahore", "Islamabad"];
cities.push("Quetta");
console.log(cities);



// Question 4:
// Remove the last element from an array using pop().

let colors = ["Red", "Blue", "Green", "Black"];
colors.pop();
console.log(colors);



// Question 5:
// Add a new element at the beginning of an array using unshift().

let numbers = [20, 30, 40];
numbers.unshift(10);
console.log(numbers);



// Question 6:
// Remove the first element of an array using shift().

let countries = ["Pakistan", "India", "China", "Turkey"];
countries.shift();
console.log(countries);



// Question 7:
// Insert "Pakistan" at index 2 using splice().

let names = ["Ali", "Ahmed", "Sara"];
names.splice(2, 0, "Pakistan");
console.log(names);



// Question 8:
// Remove two elements from an array starting from index 1 using splice().

let subjects = ["English", "Math", "Science", "Computer", "Physics"];
subjects.splice(1, 2);
console.log(subjects);



// Question 9:
// Create a new array by copying elements from index 1 to 3 using slice().

let fruitsList = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
let newFruits = fruitsList.slice(1, 4);
console.log(newFruits);



// Question 10:
// Join all elements of an array into a single string separated by commas using join().

let cars = ["BMW", "Honda", "Toyota", "Kia"];
let result = cars.join(", ");
console.log(result);



// Question 11:
// Combine two arrays of student names into one array using concat().

let boys = ["Ali", "Ahmed", "Hamza"];
let girls = ["Sara", "Ayesha", "Fatima"];

let allStudents = boys.concat(girls);
console.log(allStudents);



// Question 12:
// Reverse the order of elements in an array using reverse().

let values = [10, 20, 30, 40, 50];
values.reverse();
console.log(values);