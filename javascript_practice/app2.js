//Exercise to practice variables: Railway Ticket Price Calculator
// Create two variables:
// passengerName (your name, as a string).
// ticketPrice (base price, e.g. 120).

// Calculate the total price (base price + GST).

// Print a nice message like:
// gstRate = 0.05 (5%).
// Passenger: Alex
// Base Price: 120
// GST: 6
// Total Price: 126

const passengerName = "Hasiba";

const ticketPrice = 120;

const gstRate = 0.05;
const gstAmount = ticketPrice * gstRate;
const totalPrice = ticketPrice + gstAmount;

console.log("Passenger: " + passengerName);
console.log("Base Price: " + ticketPrice);
console.log("GST: " + gstAmount);
console.log("Total Price: " + totalPrice);
console.log("----------------------------");

//output:
// Passenger: Hasiba
// Base Price: 120
// GST: 6
// Total Price: 126

// Exercise2: Student Marks & Percentage Calculator
// Create variables for 3 subjects marks (e.g. math, science, english).
// Create a variable for totalMarks (sum of all subjects).
// Create a variable maxMarksPerSubject
// Assume each subject has 100 marks.
// Calculate the overall maximum possible marks (overallMaxMarks).
// Calculate the percentage of the student.

// Print the details in a neat format like:
// Student: Hasiba
// Math: 90
// Science: 85
// English: 95
// Total Marks: 270/300
// Percentage: 90%

let studentName = "Hasiba";
let math = 90;
let science = 85;
let english = 95;

const totalMarks = math + science + english;
const maxMarksPerSubject = 100;
const overallMaxMarks = 3 * maxMarksPerSubject;

const percentage = (totalMarks / overallMaxMarks) * 100;

console.log(`Sudent: ${studentName}`);
console.log(`Math: ${math}`);
console.log(`Science: ${science}`);
console.log(`English: ${english}`);
console.log(`Total Marks: ${totalMarks}/${overallMaxMarks}`);
console.log(`Percentage: ${percentage}`);
