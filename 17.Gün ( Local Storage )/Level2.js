/* Q1
todo: (Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. 
todo: Store the student object in your browser localStorage.) */

let student = {
    firstName: "Cemil",
    lastName: "Köybaşı",
    age: 24,
    skills: ["HTML", "CSS", "JavaScript"],
    country: "Türkiye"
};

let jsonStudent = JSON.stringify(student);

localStorage.setItem("student", jsonStudent);