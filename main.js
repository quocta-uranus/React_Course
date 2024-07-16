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

// const getHeading = document.querySelector('h1');
// getHeading.innerText = 'TRAN ANH QUOC';

// var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java'];
// var coursesList = document.querySelector('#courses-list');
// var coursesHTML = courses.map(function(course) {
//     return '<li>' + course + '</li>';
// });
// coursesList.innerHTML = coursesHTML.join('');

// //DOM CSS
// coursesList.style.backgroundColor = '#f2f2f2';
// coursesList.style.borderRadius = '5px';
// coursesList.style.padding = '10px'; (

// function showPopup() {
//   document.getElementById("myPopup").style.display = "block"
// }

// function hidePopup() {
//   document.getElementById("myPopup").style.display = "none";

// }
function addItem() {
  const inputValue = document.getElementById("myInput").value;
  const submitBtn = document.getElementById("subId");
  if (inputValue === '') {
    submitBtn.style.disable = "true";
  } else {
      const li = document.createElement("li");
      li.textContent = inputValue;
      document.querySelector(".list").appendChild(li);
      const btn = document.createElement("button");
    btn.textContent = "X";
    btn.onclick = function() {
      document.querySelector(".list").removeChild(li);
    };
    li.appendChild(btn);
      document.getElementById("myInput").value = "";
      hidePopup();
  }
}
function changeHeading() {
  const h1 = document.querySelectorAll("h1");
  h1[h1.length - 1].innerText = "Heading 4";
  h1.item(1).innerText = "Heading 4"
}
const p = document.querySelector("p");
p.addEventListener("mouseup", changeHeading);
// O day neu de changeHeading() thi ngay lap tuc se lang nghe su kien mouseover. Nen chi can truyen tham chieu den ham changeHeading


// document.querySelector('p').addEventListener("mouseover", function() {
//   const getHeading = document.querySelectorAll('h1');
//   getHeading[getHeading.length - 1].innerText = 'Heading1';

// })

document.querySelector("input").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const getHeading = document.querySelectorAll("h1");
    getHeading[getHeading.length - 1].innerText = "Heading 5 ";
  }
});
document.querySelector("input").addEventListener("change", function () {
  const getHeading = document.querySelectorAll("h1");
  if (getHeading.length > 0) {
    getHeading[getHeading.length - 1].innerText = "Heading 8";
  }
});
document.querySelector("input").addEventListener("input", function () {
  const getHeading = document.querySelectorAll("h1");
  if (getHeading.length > 0) {
    getHeading[getHeading.length - 1].innerText = "Heading 10";
  }
});

var postApi = 'https://65336a41d80bd20280f67871.mockapi.io/text';
fetch(postApi)
  .then(function(response) {
    return response.json();
    
  })
  .then(function(post){
    console.log(post);
    var htmls = post.map(function(item) {
      return `<h2> ${item.name}</h2>`;
     
    });
    var html = htmls.join('');
    document.getElementById('AppId').innerHTML = html;
  });

async function getData() {
  const url = 'https://65336a41d80bd20280f67871.mockapi.io/text';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
   var htmls = json.map(item => {
        return `<h2> ${item.name}</h2>`;
    })
      var html = htmls.join('');
      document.getElementById('AppId').innerHTML = html;
  } catch (error) {
    console.error(error.message);
  }
}
getData();