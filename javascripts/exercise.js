
function Student(name, age, grades) {
    this.name = name;
    this.age = age;
    this.grades = grades;
  }
  
 
  const students = [];
  

  students.push(new Student("Alice", 15, [90, 85, 78]));
  students.push(new Student("Bob", 16, [88, 92, 80]));
  students.push(new Student("Charlie", 14, [75, 83, 95]));
  students.push(new Student("David", 17, [95, 90, 92]));
  students.push(new Student("Emily", 16, [82, 88, 79]));
  
 
  function displayStudents() {
    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      console.log(`Student Name: ${student.name}`);
      console.log(`Age: ${student.age}`);
      console.log(`Grades: ${student.grades.join(', ')}`);
      console.log();
    }
  }
  
 
  displayStudents();