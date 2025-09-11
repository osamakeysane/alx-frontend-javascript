// Existing Teacher interface from Task 1
interface Teacher {
  readonly firstName: string; // only set when initialized
  readonly lastName: string; // only set when initialized
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // optional
  location: string;
  [key: string]: any; // allow any additional attributes
}

// Task 2: Directors interface extends Teacher
interface Directors extends Teacher {
  numberOfReports: number; // required attribute
}

// Example usage
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// -------------------
// Task 3: Printing teachers

// Interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
console.log(printTeacher("Jane", "Smith")); // Output: J. Smith
console.log(printTeacher("Albert", "Einstein")); // Output: A. Einstein
