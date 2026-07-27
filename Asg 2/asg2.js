const students = [
  { id: 101, name: "Aman", marks: 82, course: "Java" },
  { id: 102, name: "Priya", marks: 95, course: "Python" },
  { id: 103, name: "Rahul", marks: 67, course: "Java" },
  { id: 104, name: "Neha", marks: 76, course: "Web" },
  { id: 105, name: "Rohan", marks: 88, course: "Python" }
];

// Task 1 - Add a Student (push)
students.push({id:106, name:"Simran", marks:91, course:"Java"});
console.log("After Push:");
console.log(students);

// Task 2 - Remove Last Student (pop)
let removedStudent = students.pop();
console.log("Removed Student:");
console.log(removedStudent);

// Task 3 - Add Student at Beginning (unshift)
students.unshift({id:100, name:"Ankit", marks:80, course:"Web"});
console.log("After Unshift:");
console.log(students);

// Task 4 - Remove First Student (shift)
let firstStudent = students.shift();
console.log("Removed First Student:");
console.log(firstStudent);

// Task 5 - Update Array Using splice()
students.splice(2, 1, {id:107, name:"Karan",marks:78, course:"Java"});
console.log("After Splice:");
console.log(students);

// Task 6 - Create a New Array Using slice()
let firstThree = students.slice(0,3);   //end not included
console.log(firstThree);

// Task 7 - Array Iteration (for...of)
for(let student of students){
  console.log(student.name + " - " +student.course + " - " + student.marks);
}

// Task 8 - forEach()
students.forEach(student=>{
    console.log(student.name);
});

// Task 9 - map() ->new array is returned
let names = students.map(student=>student.name);
console.log(names);

// Task 10 - filter()
let topper = students.filter(student=>student.marks>=80);
console.log(topper);

// Task 11 - reduce() ->return single value
let totalMarks = students.reduce((sum,student)=>{
    return sum + student.marks;
},0);
console.log("Total Marks =",totalMarks);

let average = totalMarks / students.length;
console.log("Average =",average);

// Task 12 - sort()
// ascending
students.sort((a,b)=>a.marks-b.marks);
console.log("Ascending:");
students.forEach(student=>{
    console.log(student.marks);
});

//descending
students.sort((a,b)=>b.marks-a.marks);
console.log("Descending:");
students.forEach(student=>{
    console.log(student.marks);
});