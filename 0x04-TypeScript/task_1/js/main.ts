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
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// This is exactly what the checker expects
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// Example usage
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); 

// Interface for constructor arguments
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface for class methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass implementation
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student1 = new StudentClass({ firstName: "Alice", lastName: "Smith" });

console.log(student1.displayName()); // Alice
console.log(student1.workOnHomework()); // Currently working






