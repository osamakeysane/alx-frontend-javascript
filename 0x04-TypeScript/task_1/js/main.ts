interface Teacher {
  readonly firstName: string; // only set when initialized
  readonly lastName: string; // only set when initialized
  fullTimeEmployee: boolean; // always required
  yearsOfExperience?: number; // optional
  location: string; // always required
  [propName: string]: any; // allows extra properties like "contract"
}

// Example
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);
