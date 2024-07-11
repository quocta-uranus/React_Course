// class Student{
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// Student.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`
// };

// var student = new Student('Anh', 'Quoc');

// console.log(student.firstName); 
// console.log(student.lastName);
// console.log(student.getFullName());

// const Users = [
//     {
//         id: 1, 
//         name: 'Quoc',
//         age: 20,

//     },
//     {
//         id: 2, 
//         name: 'LEO',
//         age: 22,
        
//     },
//     {
//         id: 3, 
//         name: 'LEOAQ',
//         age: 11,
        
//     },
//     {
//         id: 4, 
//         name: 'LEOAQqqeqw',
//         age: 28,
        
//     }
// ];
// const newUser = Users.map(user => {
//         Age = user.age;
//         console.log(Age);
// })

// const totalAge = Users.reduce((sum, user) => sum + user.age, 0);

// console.log('Total Age:', totalAge);

// var querySelector = document.querySelector('.products-list');
// var getElementsByClassName = document.getElementsByClassName('products-list');

// var firstProductElement = document.querySelector('.product');

// var buttonElements = document.querySelectorAll('button');

// console.log('querySelector', querySelector);
// console.log('getElementsByClassName', getElementsByClassName);
// console.log(buttonElements);


// var heading = document.querySelector("h1");
// heading.title = "heading";
// heading.setAttribute("data-title", "Heading");

const getHeading = document.querySelector('h1');
getHeading.innerText = 'TRAN ANH QUOC';

var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java'];
var coursesList = document.querySelector('#courses-list');
var coursesHTML = courses.map(function(course) {
    return '<li>' + course + '</li>';
});
coursesList.innerHTML = coursesHTML.join('');

//DOM CSS
coursesList.style.backgroundColor = '#f2f2f2'; 
coursesList.style.borderRadius = '5px'; 
coursesList.style.padding = '10px'; 


